// let myName = "Harsh    "

// console.log(myName.truelength());


let myHeros = ["ironMan","spiderMan"]

let heroPower = {
    ironMan:"genius",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`);
    }
}

Object.prototype.harsh = function(){
    // console.log("harsh is present in all objects");
}

Array.prototype.heyHarsh = ()=>{
    // console.log('Im inevitable');
    
}

//  heroPower.harsh()
// myHeros.harsh()
myHeros.heyHarsh()
// heroPower.heyHarsh() 


// Inheritance

const teacher = {
    makeVideo: true   
}

const user ={
    name : "chai",
    email:"chai@gmail.com"
}

const TeachingSupport = {
    isAvailable: false

}

const TAsupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

teacher.__proto__ = user


// Modern syntax

Object.setPrototypeOf(TeachingSupport,teacher)


let anotherUserName = "ShamAurJS       "

String.prototype.trueLength = function (){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"harsh".trueLength()
"chai".trueLength()