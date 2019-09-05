url = "https://www.delish.com/cooking/recipe-ideas/recipes/a53823/easy-pad-thai-recipe/"

# opener = urllib.URLopener()
# opener.addheader(('User-Agent', 'Mozilla/5.0'))
# f = urllib.urlopen(url)

import requests
import html2text

h = html2text.HTML2Text()
h.ignore_links = True


f = requests.get(url)
g = h.handle(f.text)
print(g)
