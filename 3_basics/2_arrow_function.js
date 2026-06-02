const user = {
    username:"harsh",
    price: 99,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }

}
// user.welcomemessage()
// user.username = "suru"
// user.welcomemessage()

// console.log(this) 

// this only works inside object "to fetch elements", not in functions
// function garmi(){
//     let username = "harsh"
//     console.log(this.username);
// }
// garmi()

// const garmi = function() {
//     let username = "harsh"
//     console.log(this.username);
// }

// this inside arrow function gives empty when alone ,if we want to fetch element it gives undefined
const garmi = () => {
    let username = "harsh"
    console.log(this);
}
// garmi()

// const addtwo = (num1,num2)=>{
//     return num1+num2
// }

// implicit return notation
// const addtwo = (num1,num2) => (num1+num2)

const addtwo = (num1,num2)=> ({username:"harsh"}) // for objects we must put curly braces 
console.log(addtwo(3,4));
 