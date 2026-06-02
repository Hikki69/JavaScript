// singleton
// object.create

// Object Literals

const mySym = Symbol("key1")

const JSuser = {
    name: "harsh",
    "full_name":"harsh jha", // there is no chance it can be printed by using dot 
    [mySym]: "myKey1",
    age: 19,
    location : "Faridabad",
    isLoggedIn : true,
    loggedInDays : ["Monday","Tuesday"]
}

// console.log(JSuser.location);
// console.log(JSuser["location"]);
// // console.log(JSuser.full name); not allowed
// console.log(JSuser["full_name"]);
// console.log(JSuser[mySym]);


JSuser.location = "Delhi"
// Object.freeze(JSuser)
JSuser.city = "Narela"
// console.log(JSuser);

JSuser.greeting = function (){
    console.log("hello JS user");
}
JSuser.greetingTwo = function (){
    console.log(`hello JS user,${this.name}`);
}
console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());
