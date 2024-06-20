//  object is all about key and values

const juser ={
    name : "ritesh",
    age : 18,
    email: "coordination.sphere779@gmail.com",
    "game hobby": "pubg",
};

console.log(juser["game hobby"])

//we can freeze any value of the objects

Object.freeze(juser)

juser.email="ok"

console.log(juser["email"])

//here we can see there is no change in the value of the email key.
