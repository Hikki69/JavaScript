// class user {
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc` 
//     }
//     changeusername (){
//         return `${this.username.toUpperCase()}` 
//     }
// }

// const user1 = new user("user1","user@gmail.com","464")

// console.log(user1.encryptPassword());
// console.log(user1.changeusername());


// behind the scene 

function User(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function (){
    return `${this.password}abc` 
}
User.prototype.changeusername = function (){
    return `${this.username.toUpperCase()}` 
}

const user2 = new User("user2","user2@gmail.com","465")
console.log(user2.encryptPassword());
console.log(user2.changeusername());

