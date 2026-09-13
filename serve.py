#!/usr/bin/env python3
"""Server di sviluppo per il sito Aqua Zone.

Identico a `python3 -m http.server`, ma dichiara le risposte non memorizzabili
in cache: senza questo il browser continua a mostrare la versione precedente di
styles.css e app.js dopo una modifica, e sembra che le modifiche non abbiano
effetto.
"""
import http.server
import os
import sys

DIRECTORY = os.path.dirname(os.path.abspath(__file__))


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        self.send_header("Expires", "0")
        super().end_headers()

    def log_message(self, fmt, *args):  # log piu' compatto
        sys.stderr.write("%s - %s\n" % (self.address_string(), fmt % args))


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8642
    print(f"Aqua Zone su http://localhost:{port}  (cartella: {DIRECTORY})")
    http.server.ThreadingHTTPServer(("", port), NoCacheHandler).serve_forever()
