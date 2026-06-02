// Question - In javascript Math.PI has value of 3.14, if you want to change it to 4. Is it possible then how, if not then why

// Answer - It is possible , below is the solution

// console.log(Math.PI); => 3.145....

const descriptor = Object.getOwnPropertyDescriptor(Math,'PI')

// console.log(descriptor);

const chai = {
    name:"ginger chai",
    price:250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bani");
    }
}


Object.defineProperty(chai,'name',{
    // writable: false,
    enumerable: false
}) 

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);
    }
    
}