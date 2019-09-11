url = "https://www.delish.com/cooking/recipe-ideas/recipes/a53823/easy-pad-thai-recipe/"
url2 = "https://www.allrecipes.com/recipe/92462/slow-cooker-texas-pulled-pork/"
# opener = urllib.URLopener()
# opener.addheader(('User-Agent', 'Mozilla/5.0'))
# f = urllib.urlopen(url)

import requests
import html2text


h = html2text.HTML2Text()
h.ignore_links = True
f = requests.get(url2)
g = h.handle(f.text)

arrayOflines = g.split("\n")

isPrinting = False

chunk = []
chunks = []

for line in arrayOflines:
    if(len(line) != 0):
        chunk.append(line)
    else:
        chunks.append(chunk)
        chunk = []


print(chunks)
for c in chunks:
    print(c)
    print("\n \n")

    # if 'ingredients' in line.lower() and len(line) < 15:
    #     print(line)

        # if "ingredients" in line and len(line) < :
    #     print(len(line))
    #     isPrinting = True
    # if(isPrinting):
    #     print(line)
    # if(len(line) == 0):
    #     isPrinting = False    

# print(arrayOflines)
