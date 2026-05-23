import fitz

doc = fitz.open(r'c:\Kpritam\Thinking\GamePlay\1\kid-learning-game\MATH.pdf')
for i in range(len(doc)):
    page = doc[i]
    d = page.get_text('dict')
    texts = []
    for block in d.get('blocks', []):
        if block.get('type') == 0:
            for line in block.get('lines', []):
                for span in line.get('spans', []):
                    t = span.get('text', '').strip()
                    if t:
                        texts.append(t)
    if texts:
        print("PAGE " + str(i+1) + ": " + " | ".join(texts[:20]))
doc.close()
print("Done")
