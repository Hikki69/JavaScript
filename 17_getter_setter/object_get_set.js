const user = {
    _email:'user1@gmail.com',
    _password:'abc',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    },
    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this._password = value
    }
}

const user1 = Object.create(user)
console.log(user1.email);
console.log(user1.password);
