from contentExtractor import getText, getLinesArray

enders = ["directions", "combine", "preparation", "#", "recipe"]


debug = False

#this is one of the algos to get ingredients
def recordingWithEnder(url):
    lines = getLinesArray(url)
    recording = False
    ingredientsHaveRunOnce = False
    strOut = ""
    for line in lines:
        if isEnderLine(line) and recording == True and debug == False:
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
    
    ingredientList = strOut.split("*")
    if len(ingredientList)  < 4:
        return ["SHITDICK"]

    sexyIngredientList = []
    for ingredient in ingredientList:
        newIngredient = ingredient.replace("Ingredients", "")
        newIngredient = newIngredient.replace("ingredients", "")
        newIngredient = newIngredient.replace("#", "")
        newIngredient = newIngredient.strip()
        if(len(newIngredient) != 0):
            sexyIngredientList.append(newIngredient)
        # ingredient = ingredient.replace("#","")
        # ingredient = ingredient.strip()


    return sexyIngredientList


    

def isEnderLine(line):
    wordsInLine = line.split(" ")
    for word in wordsInLine:
        if word.lower() in enders:
            return True
    return False


stringList = ["## YO##   "]
newList = []
for s in stringList:
    asscheeks = s.replace("#","")
    newList.append(asscheeks)

string = "##  yo    #   "
string2  = string.replace("#","")
print(string2)
# print(stringList)
#TESTING
url1 = "https://www.tasteofhome.com/recipes/apple-pie/"
url2 = "https://www.simplyrecipes.com/recipes/homemade_pizza/"
url3 = "https://www.bonappetit.com/recipe/thai-larb"
url4 = "https://www.allrecipes.com/recipe/257938/spicy-thai-basil-chicken-pad-krapow-gai/"
print(recordingWithEnder(url1))
print(recordingWithEnder(url2))

print(recordingWithEnder(url3))

print(recordingWithEnder(url4))



# print(getText(url2))
# import json

# define list with values

# open output file for writing
# with open('enders.txt', 'w') as filehandle:
#     json.dump(basicList, filehandle)