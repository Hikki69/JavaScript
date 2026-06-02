const user = {
    username:"harsh",
    loginCount:8,
    signedIn: true,

    getUserDetails: function (){
        // console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// const promiseOne = new Promise() // new keyword is constructor function

function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    // return this - it is implicitly defined , no need to write it

}

const userOne = new User("harsh",5,true)
const userTwo = new User("jha ji",54,false)
console.log(userOne);
console.log(userTwo);

