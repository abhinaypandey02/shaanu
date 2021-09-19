import json
import requests

MODELS_LIST_PATH=r"C:\Users\abhin\Desktop\modelsList.txt"
MODELS_LIST_PATH=r"C:\Users\abhin\Desktop\brandsList.txt"
CAR_MODEL_IMAGES_PATH='C:\\Users\\abhin\\WebstormProjects\\shaanu\\carModelsImages\\'
CAR_BRAND_IMAGES_PATH='C:\\Users\\abhin\\WebstormProjects\\shaanu\\carBrandsImages\\'
JSON_PATH=r"C:\Users\abhin\WebstormProjects\shaanu\src\database\carsData.json"

def downloadToFolder(txtPath,destinationFolder,imageLinkFoundArgument="https",imageLinkNotFoundArgument="PIC NOT AVAILABLE",extenstion="jpeg",defaultPic="https://raw.githubusercontent.com/abhinaypandey02/shaanu/master/carModelsImages/0.jpeg"):
    models=[]
    key=0

    with open(txtPath,'r') as f:
        for line in f.readlines():
            if imageLinkFoundArgument in line:
                models.append(line.strip())
            if imageLinkNotFoundArgument in line:
                models.append(defaultPic)

    for url in models:
        print("Downloading image "+str(key)+'.'+extenstion)
        r=requests.get(url, allow_redirects=True)
        print("Writing image ")
        with open(destinationFolder+str(key)+'.'+extenstion,'wb') as f:
            f.write(r.content)
        key+=1

def updateJSON(jsonPath,modifyJSON):
    jsonData={}
    
    with open(jsonPath,'r') as f:
        jsonData=json.loads(f.read())
    modifyJSON(jsonData)
    with open(jsonPath,'w') as f:
        f.write(json.dumps(jsonData))

def setModelURLs(jsonData):
    key=0
    for brand in jsonData:
        for model in jsonData[brand]["models"]:
            try:
                jsonData[brand]["models"][model]["imageURL"]="https://raw.githubusercontent.com/abhinaypandey02/shaanu/master/carModelsImages/"+str(key)+".jpeg"
                key+=1
                print(key)
            except:    
                break
def setBrandURLs(jsonData):
    key=0
    for brand in jsonData:
        jsonData[brand]["imageURL"]="https://raw.githubusercontent.com/abhinaypandey02/shaanu/master/carBrandsImages/"+str(key)+".jpeg"
        key+=1
        print(key)
downloadToFolder(MODELS_LIST_PATH,CAR_MODEL_IMAGES_PATH)
# updateJSON(JSON_PATH,setModelURLs)        
updateJSON(JSON_PATH,setBrandURLs)        