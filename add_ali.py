import os, re

links = {
    'Tapo P100 Prise Connectée WiFi': 'https://s.click.aliexpress.com/e/_c3yQBvPn',
    'EIGHTREE Mini Prise Connectée WiFi 16A': 'https://s.click.aliexpress.com/e/_c3m3Dz65',
    'Amazon Smart Plug Prise Connectée WiFi': 'https://s.click.aliexpress.com/e/_c4FunRJX',
    'ANTELA Prise Connectée WiFi Lot de 2 avec Conso': 'https://s.click.aliexpress.com/e/_c32NcRON',
    'Refoss Prise Connectée HomeKit Lot de 4': 'https://s.click.aliexpress.com/e/_c3R8ntQN',
    'Philips Hue White & Color Starter Kit': 'https://s.click.aliexpress.com/e/_c2yLyHGh',
    'Govee Ampoules WiFi Intelligentes E27': 'https://s.click.aliexpress.com/e/_c4N4YmF7',
    'Tapo L530E Ampoule LED E27 WiFi Multicolore': 'https://s.click.aliexpress.com/e/_c3pwsjCh',
    'AISIRER Ampoule WiFi E27 RGB Lot de 2': 'https://s.click.aliexpress.com/e/_c3CXBiNX',
    'Philips Hue GU10 White & Color Lot de 2': 'https://s.click.aliexpress.com/e/_c35HjJE9',
    'GY Ampoule Connectée GU10 WiFi Lot de 6': 'https://s.click.aliexpress.com/e/_c3dvyqYH',
    'iFEEL Ampoule Connectée E27 Multicolore': 'https://s.click.aliexpress.com/e/_c3tdRgBb',
    'LIFX GU10 Ampoule WiFi Multicolore': 'https://s.click.aliexpress.com/e/_c34alsUN',
    'GY Ampoule E27 WiFi 23W 2400LM Globe G150': 'https://s.click.aliexpress.com/e/_c4sR1HlF',
    'ANOOPSYCHE Ampoule WiFi E27 9W Lot de 2': 'https://s.click.aliexpress.com/e/_c3XGw1Vb'
}

with open('products.js', 'r', encoding='utf-8') as f:
    content = f.read()

for name, link in links.items():
    # Use a regex to insert aliLink right after the asin line for the block containing the name
    escaped_name = re.escape(name)
    # Find the object that has this name
    pattern = r'(name:\s*"' + escaped_name + r'"[\s\S]*?asin:\s*"[^"]+",)'
    replacement = r'\g<1>\n    aliLink: "' + link + r'",'
    content = re.sub(pattern, replacement, content)

with open('products.js', 'w', encoding='utf-8') as f:
    f.write(content)
print('OK')
