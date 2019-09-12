from contentExtractor import getText, getLinesArray

enders = ["directions", "combine", "preparation", "#", "recipe"]





def recordingWithEnder(url):
    lines = getLinesArray(url)
    recording = False
    ingredientsHaveRunOnce = False
    strOut = ""
    for line in lines:
        if enderLine(line) and recording == True:
            # if(recording == True):
                # print(line + "\n")
            recording = False
            ingredientsHaveRunOnce = True

        if "ingredients" in line.lower() and ingredientsHaveRunOnce == False:
            # recording = True
            if len(line) < 30:
                recording = True
        if recording:
            # print(line)
            strOut = strOut + line
    
    return strOut


def enderLine(line):
    wordsInLine = line.split(" ")
    for word in wordsInLine:
        if word.lower() in enders:
            return True
    return False



#TESTING
url = "https://www.tasteofhome.com/recipes/apple-pie/"
url2 = "https://www.simplyrecipes.com/recipes/homemade_pizza/"
url3 = "https://www.bonappetit.com/recipe/thai-larb"
url4 = "https://www.allrecipes.com/recipe/257938/spicy-thai-basil-chicken-pad-krapow-gai/"
print(recordingWithEnder(url4))


# print(getText(url2))
# import json

# define list with values

# open output file for writing
# with open('enders.txt', 'w') as filehandle:
#     json.dump(basicList, filehandle)