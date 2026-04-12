import sys
import re

rep = {
    'Ã©': 'é',
    'Ã¨': 'è',
    'Ã ': 'à',
    'Ã¢': 'â',
    'Ãª': 'ê',
    'Ã®': 'î',
    'Ã§': 'ç',
    'Ã´': 'ô',
    'Ã»': 'û',
    'â‚¬': '€',
    'â€”': '—',
    'â€©': ' ',
    'ðŸ Ÿ': '🍟',
    'â˜•': '☕',
    'ðŸ”¥': '🔥',
    'ðŸ”Œ': '🔌',
    'ðŸ’¡': '💡',
    'ðŸ”’': '🔒',
    'ðŸ¤–': '🤖',
    'ðŸŒ¡ï¸\x8f': '🌡️',
    'ðŸŒ¡ï¸ ': '🌡️',
    'ðŸ“·': '📷',
    'ðŸš¨': '🚨',
    'ðŸ‘¶': '👶',
    'ðŸ™…': '🙅',
    'â˜€ï¸\x8f': '☀️',
    'â˜€ï¸ ': '☀️',
    'ðŸ“‹': '📋',
    'âš–ï¸\x8f': '⚖️',
    'âš–ï¸ ': '⚖️',
    'Ã¤': 'ä',
    'Ã¯': 'ï',
    'â€™': "'",
    'Å“': 'œ',
    'â€¦': '...',
    'Â°': '°',
    'Ã¼': 'ü',
    'Â²': '²',
    'Ãˆ': 'È',
    'Ã‰': 'É',
    'Â ': ' ',
    'ðŸ›‘': '🛑',
    'â\x96ª': '▪',
    'âœ…': '✅',
    'âœ…ï¸\x8f': '✅',
    'ðŸ\x91\x89': '👉',
    'ðŸ’°': '💰',
    'ðŸ“£': '📣',
    'ðŸ\x9A€': '🚀',
    'âš ': '⚠',
    'ðŸš¨': '🚨',
    'ðŸ“Œ': '📌',
    'ðŸ¤\x94': '🤔'
}

def fix(path):
    with open(path, 'r', encoding='utf-8') as f:
        t = f.read()

    # Apply all manual mappings safely
    for k, v in rep.items():
        t = t.replace(k, v)

    # Some dynamic cp1252 restoration for any remaining messed up utf-8
    # We only apply this to chunks that look like they are exactly 2-3 bytes of corrupted utf-8.
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(t)

fix('app.js')
fix('products.js')
print('OK')
