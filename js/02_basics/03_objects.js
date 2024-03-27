
const user = {
    name : "Sameer",
    age : 18,
    location : "lalitpur",
    email : "mah@gmail.com", 
    "isLoggedIn" : false,
    lastLoginDay : ["monday", "wednesday" ],
    "permanent address" : "Mahalaxmi"   //if the key needs whitespace then it should be in double quote
}

//accessing object
console.log(user.name);
console.log(user.lastLoginDay)
console.log(user["lastLoginDay"])
console.log(user["lastLoginDay"][1])

//accessing the object tha has white space in the key
console.log(user["permanent address"])
// console.log(user.permanent address)  //cannot access using . because there is whitespace in key
//but can access key without whitespace
console.log(user.isLoggedIn)

// user.email = "remas@com"
// console.log(user.email)
// Object.freeze(user) //now the object is freeze and cannot be change
// user.email = "freeze@jasd"
// console.log(user)


//function in object
user.greeting = function (){
    console.log("hello greet")
}

user.greetingTwo = function() {
    console.log(`Greeting Two ${this.name}`)
}

console.log(user.greeting())
console.log(user.greetingTwo())