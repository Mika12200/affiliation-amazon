import sys
def fix_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        out = ''
        for line in f:
            try:
                out += line.encode('cp1252').decode('utf-8')
            except:
                out += line
    with open(path, 'w', encoding='utf-8') as f:
        f.write(out)
fix_file('products.js')
fix_file('app.js')
print('FIXED')
