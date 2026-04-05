import os, re
header_pattern = re.compile(r'^\s*<a href="index\.html" class="logo">.*?</a\s*>', re.MULTILINE | re.DOTALL)
new_header = '''      <a href="index.html" class="logo" style="display:flex; align-items:center;">
        <img src="logo.png" alt="MeilleursAppareils Logo" style="height: 40px; margin-right: 12px; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 242, 254, 0.2);">
        <span style="font-weight: 800; background: linear-gradient(90deg, #fff, #00f2fe); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">MeilleursAppareils</span>
      </a>'''
for file in os.listdir('.'):
    if file.endswith('.html') and 'tiktok' not in file:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        content, count = header_pattern.subn(new_header, content)
        if count > 0:
            with open(file, 'w', encoding='utf-8') as fw:
                fw.write(content)
            print(f'Updated {file}')
