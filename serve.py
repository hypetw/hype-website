#!/usr/bin/env python3
"""
Minimal static file server with HTTP Range request support.

Needed because Python's built-in http.server does NOT send `206 Partial Content`
for Range requests, which breaks <video> playback in all major browsers.

Usage:
  python3 serve.py [port] [directory]

Defaults: port 4173, directory = current working directory
"""
import os
import re
import sys
from http.server import SimpleHTTPRequestHandler, HTTPServer


class RangeRequestHandler(SimpleHTTPRequestHandler):
    # Serve .webp, .mp4, .webm with correct MIME types
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        '.mp4': 'video/mp4',
        '.webm': 'video/webm',
        '.webp': 'image/webp',
        '.svg': 'image/svg+xml',
    }

    def do_GET(self):
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            return super().do_GET()
        if not os.path.isfile(path):
            self.send_error(404, "File not found")
            return

        try:
            f = open(path, 'rb')
        except OSError:
            self.send_error(404, "File not accessible")
            return

        try:
            fs = os.fstat(f.fileno())
            size = fs.st_size
            ctype = self.guess_type(path)

            range_header = self.headers.get('Range')
            if range_header:
                m = re.match(r'bytes=(\d+)-(\d*)', range_header)
                if m:
                    start = int(m.group(1))
                    end = int(m.group(2)) if m.group(2) else size - 1
                    end = min(end, size - 1)

                    if start > end:
                        self.send_response(416)
                        self.send_header('Content-Range', f'bytes */{size}')
                        self.end_headers()
                        return

                    length = end - start + 1
                    self.send_response(206)
                    self.send_header('Content-Type', ctype)
                    self.send_header('Accept-Ranges', 'bytes')
                    self.send_header('Content-Range', f'bytes {start}-{end}/{size}')
                    self.send_header('Content-Length', str(length))
                    self.send_header('Last-Modified', self.date_time_string(fs.st_mtime))
                    self.send_header('Cache-Control', 'no-store')
                    self.end_headers()

                    f.seek(start)
                    remaining = length
                    while remaining > 0:
                        chunk = f.read(min(64 * 1024, remaining))
                        if not chunk:
                            break
                        try:
                            self.wfile.write(chunk)
                        except (BrokenPipeError, ConnectionResetError):
                            return
                        remaining -= len(chunk)
                    return

            # Full response
            self.send_response(200)
            self.send_header('Content-Type', ctype)
            self.send_header('Accept-Ranges', 'bytes')
            self.send_header('Content-Length', str(size))
            self.send_header('Last-Modified', self.date_time_string(fs.st_mtime))
            self.send_header('Cache-Control', 'no-store')
            self.end_headers()

            while True:
                chunk = f.read(64 * 1024)
                if not chunk:
                    break
                try:
                    self.wfile.write(chunk)
                except (BrokenPipeError, ConnectionResetError):
                    return
        finally:
            f.close()

    def log_message(self, format, *args):
        # Quieter logging — only errors
        if args and len(args) > 1 and str(args[1]).startswith(('4', '5')):
            sys.stderr.write("%s - - [%s] %s\n" % (
                self.address_string(), self.log_date_time_string(), format % args))


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 4173
    directory = sys.argv[2] if len(sys.argv) > 2 else '.'
    os.chdir(directory)
    server = HTTPServer(('', port), RangeRequestHandler)
    print(f"Serving {os.getcwd()} at http://localhost:{port} (with Range support)")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")


if __name__ == '__main__':
    main()
