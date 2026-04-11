import os, re

links = {
    'Tapo P100': 'https://s.click.aliexpress.com/e/_c3yQBvPn',
    'EIGHTREE Mini Prise': 'https://s.click.aliexpress.com/e/_c3m3Dz65',
    'Amazon Smart Plug': 'https://s.click.aliexpress.com/e/_c4FunRJX',
    'ANTELA Prise': 'https://s.click.aliexpress.com/e/_c32NcRON',
    'Refoss Prise': 'https://s.click.aliexpress.com/e/_c3R8ntQN',
    'Philips Hue White & Color Starter': 'https://s.click.aliexpress.com/e/_c2yLyHGh',
    'Govee Ampoules WiFi': 'https://s.click.aliexpress.com/e/_c4N4YmF7',
    'Tapo L530E': 'https://s.click.aliexpress.com/e/_c3pwsjCh',
    'AISIRER': 'https://s.click.aliexpress.com/e/_c3CXBiNX',
    'Philips Hue GU10': 'https://s.click.aliexpress.com/e/_c35HjJE9',
    'GY Ampoule Connect': 'https://s.click.aliexpress.com/e/_c3dvyqYH',
    'iFEEL': 'https://s.click.aliexpress.com/e/_c3tdRgBb',
    'LIFX': 'https://s.click.aliexpress.com/e/_c34alsUN',
    'GY Ampoule E27': 'https://s.click.aliexpress.com/e/_c4sR1HlF',
    'ANOOPSYCHE': 'https://s.click.aliexpress.com/e/_c3XGw1Vb'
}

with open('products.js', 'r', encoding='utf-8') as f:
    content = f.read()

for prefix, link in links.items():
    # Match name containing the prefix
    pattern = r'(name:\s*"[^"]*' + re.escape(prefix) + r'[^"]*"[\s\S]*?asin:\s*"[^"]+",)'
    replacement = r'\g<1>\n    aliLink: "' + link + r'",'
    content = re.sub(pattern, replacement, content)

with open('products.js', 'w', encoding='utf-8') as f:
    f.write(content)
print('OK')
