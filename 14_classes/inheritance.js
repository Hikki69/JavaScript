class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super (username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const user1 = new Teacher("user1","user1@gmail.com","123")
user1.addCourse()
user1.logMe()

const user2 = new user ("user2")
user2.logMe() 
// user2.addCourse() // user2 does not have access of addCourse() function 

console.log(user1 instanceof Teacher); // true
console.log(user1 instanceof user); // true
