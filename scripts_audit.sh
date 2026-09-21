#!/usr/bin/env bash
set -euo pipefail
HTML="$(dirname "$0")/index.html"
python3 - "$HTML" <<'PY'
from pathlib import Path
import re,sys
p=Path(sys.argv[1]); s=p.read_text()
js='\n'.join(re.findall(r'<script(?:[^>]*)>(.*?)</script>',s,re.S))
Path('/tmp/lumo360-audit.js').write_text(js)
checks={
 'standard PDF engine':'buildStandardPdf(',
 'internal SII status':'NO ENVIADO AL SII',
 'configurable recipients':'documentRecipients()',
 'commercial pipeline':'SALES_STAGES',
 'PWA manifest':'./manifest.json',
 'service worker':'./sw.js',
}
for name,needle in checks.items():
    assert needle in s,(name,needle)
print('Static checks: OK')
PY
node --check /tmp/lumo360-audit.js
echo 'JavaScript syntax: OK'
for f in manifest.json sw.js icon-192.png icon-512.png favicon.png icon.svg README.md AUDITORIA.md; do test -f "$(dirname "$0")/$f"; done
echo 'PWA assets: OK'
