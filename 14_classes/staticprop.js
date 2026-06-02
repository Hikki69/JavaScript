class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

const harsh = new user ("harsh")
// console.log(harsh.createId())

class teacher extends user{
    constructor(username,email){
        super (username)
        this.email = email
    }
}

const iphone = new teacher("iphone","i@phone.com")
console.log(iphone.createId())
