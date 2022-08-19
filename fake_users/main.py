from cmath import log
import requests
import json
import random

nb_user = 50
URL = "https://randomuser.me/api/?results=" + \
    str(nb_user) + "&nat=fr&inc=name,location,email,login,dob,cell"

# sending get request and saving the response as response object
r = requests.get(url=URL)

# extracting data in json format
users = r.json()
users = users['results']

counter = 0
for user in users:
    try:
        #register
        email = user['email']
        password = user['login']['password']
        firstname = user['name']['first']
        lastname = user['name']['last']
        number = (user['cell']).replace('-', '')
        dateofbirth = user['dob']['date']
        city = user['location']['city']
        role = "User"
        url = 'http://localhost:9000/users/register'
        myobj = {
            "email": email,
            "password": password,
            "firstName": firstname,
            "lastName": lastname,
            "number": number,
            "dateofbirth": dateofbirth,
            "city": city,
            "role": role
        }
        x = requests.post(url, json=myobj)
        #login
        url = 'http://localhost:9000/users/login'
        myobj = {
            "email": email,
            "password": password,
        }
        x = requests.post(url, json=myobj)

        # play
        # json_object = json.loads(x.text)
        # token = 'Bearer ' + json_object['user']['token']
        # url = "http://localhost:9000/game/answer"
        # headers = {'Authorization': token}
        # Response_1 = ["Barcelone", "Madrid", "Malaga"]
        # Response_2 = ["FelipeVI", "FelipeV", "FelipeIII"]
        # answer1 = random.choice(Response_1)
        # answer2 = random.choice(Response_2)
        # data = {
        #     "answer1": answer1,
        #     "answer2": answer2
        # }
        # response = requests.post(url, headers=headers, json=data)

        counter = counter + 1
        print("I added " + str(counter)+" new users")
    except:
        print("An error")
