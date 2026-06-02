// function addTwoNums(num1,num2){
//     console.log(num1+num2);
// }
function addTwoNums(num1,num2){
    return (num1+num2);
}

const result = addTwoNums(5,5)
// console.log(result);


function loginusername(username = "Suru"){
    if(!username){
        // console.log("please enter a username");  
        return
    }
    return `${username} just logged in`
}
const userstatus = loginusername("harsh")
// console.log(userstatus);


function calculateCartprice(val1,val2,...num){ // ... is rest operator symbol , it is used when the number of parameters are unknown
    return num
}

// console.log(calculateCartprice(200,400,500,2000))

const user = {
    username: "harsh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username:"Suru",
    price:399
})

const mynewarr = [200,400,100,600]

function returnsecondvalue(getarr){
    return getarr[1]
}

console.log(returnsecondvalue(mynewarr));
