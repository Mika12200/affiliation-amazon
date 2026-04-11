import os, re

links = {
    'GALAYOU': 'https://s.click.aliexpress.com/e/_c3GTrUiZ',
    'aosu 2K': 'https://s.click.aliexpress.com/e/_c4Nesz0t',
    'Imou 2K Caméra Solaire': 'https://s.click.aliexpress.com/e/_c4UhYMHJ',
    'Tapo C210': 'https://s.click.aliexpress.com/e/_c31Azpz7',
    'Imou 2K Caméra Intérieure': 'https://s.click.aliexpress.com/e/_c4Unt5DT',
    'Ring Video Doorbell 4': 'https://s.click.aliexpress.com/e/_c4FHbRWV',
    'Arlo Pro 5': 'https://s.click.aliexpress.com/e/_c3PxMHvL',
    'X-Sense': 'https://s.click.aliexpress.com/e/_c2RD0YPx',
    'AGSHOME': 'https://s.click.aliexpress.com/e/_c3hH5RBr',
    'TECPEAK': 'https://s.click.aliexpress.com/e/_c3874ak9',
    'Kit Alarme Sans Fil 115dB': 'https://s.click.aliexpress.com/e/_c3418QtJ',
    'Somfy Home Alarm': 'https://s.click.aliexpress.com/e/_c4azch7n',
    'Ajax Hub 2': 'https://s.click.aliexpress.com/e/_c3XANj6N'
}

with open('products.js', 'r', encoding='utf-8') as f:
    content = f.read()

for prefix, link in links.items():
    # Match name containing the safe prefix (ASCII safe)
    # We map 'é' and 'è' to match the original js or just remove it. Let's make prefix safe.
    safe_prefix = prefix.replace('é', '.').replace('è', '.')
    pattern = r'(name:\s*"[^"]*' + safe_prefix + r'[^"]*"[\s\S]*?asin:\s*"[^"]+",)'
    replacement = r'\g<1>\n    aliLink: "' + link + r'",'
    content = re.sub(pattern, replacement, content)

with open('products.js', 'w', encoding='utf-8') as f:
    f.write(content)
print('OK')
