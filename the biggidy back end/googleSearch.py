import urllib
from bs4 import BeautifulSoup
import requests
import webbrowser

text = 'hello world'
text = urllib.parse.quote_plus(text)

url = 'https://google.com/search?q=' + text

response = requests.get(url)

#with open('output.html', 'wb') as f:
#    f.write(response.content)
#webbrowser.open('output.html')


soup =  BeautifulSoup(response.text, "lxml")


for g in soup.findAll("h3"):
    # if(g.href != None):
    print(g.text)
    # print(g.text)
    # print(g.href)
    print("-----")
    # if g.href != None:
    #     print(g.get(href))
    # print('-----')


# for link in soup.findAll('a', attrs={'href': re.compile("^http://")}):
#     print(link)