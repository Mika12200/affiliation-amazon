import re
with open('products.js', 'r', encoding='utf-8') as f:
    t = f.read()

# Replace any corrupted emoji field with a generic star to avoid parsing issues
# Emojis are trapped between 'emoji: "' and '",'
# We match strings that contain Ã or ð or â inside the emoji field
t = re.sub(r'emoji:\s*"[^"]*[Ãðâ][^"]*"', 'emoji: "✨"', t)
t = re.sub(r'emoji:\s*"[^\w\s]{2,8}"', 'emoji: "✨"', t) # Catch remaining weird byte strings

with open('products.js', 'w', encoding='utf-8') as f:
    f.write(t)
    
with open('app.js', 'r', encoding='utf-8') as f:
    t = f.read()

t = re.sub(r'icon:\s*"[^"]*[Ãðâ][^"]*"', 'icon: "✨"', t)
with open('app.js', 'w', encoding='utf-8') as f:
    f.write(t)

print("Emoji fix applied!")
