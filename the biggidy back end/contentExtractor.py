import html2text
import requests

def getText(url):
    h = html2text.HTML2Text()
    h.ignore_links = True
    f = requests.get(url)
    return h.handle(f.text).encode("utf-8")

def getLinesArray(url):
    text = getText(url)
    return text.split("\n")

def getHtml(url):
    return requests.get(url).text.encode("utf-8")


# TESTING
# url = "https://shewearsmanyhats.com/hawaiian-chicken-kabobs-recipe/"
# url2 = "https://www.tasteofhome.com/recipes/apple-pie/"
html3 = "https://www.allrecipes.com/recipe/257938/spicy-thai-basil-chicken-pad-krapow-gai/"
# print(getText(url))
# print(getText(url2))
# print(getText(html3))

# print(getLines(url))
# print(getHtml(url))

