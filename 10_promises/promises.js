const promise1 = new Promise(function (resolve,reject){
    // do an async task
    //DB calls, cryptography, network
    setTimeout(()=>{
        console.log('async task is complete');
        resolve()
    },1000)
})

promise1.then(()=>{
    console.log('promise comsumed');
    
})

new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(()=>{
    console.log("aysnc 2 resolved");
    
})

const promise3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({username:"harsh",email:"pasta@gmail.com"})
    }, 1000);
})

promise3.then((user)=>{
    console.log(user);
    
})

const promise4 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true
        if(!error) {
            resolve({username:"harsh",email:"pasta@gmail.com",password:"123"})
        }
        else{
            reject("ERROR: something went wrong")
        }
    }, 1000);
})

promise4.then((user)=>{
    console.log(user);
    return user.username    
}).then((username)=>{
    console.log(username);  
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The Promise is either resolved or rejected");
    
})

const promise5 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true
        if(!error) {
            resolve({username:"javascript",email:"pasta@gmail.com",password:"123"})
        }
        else{
            reject("ERROR: JS went wrong")
        }
    }, 1000);
})

async function consumePromise5(){
    try {
        const response = await promise5
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromise5()

// async function getAllUsers(){
//     try {
//         const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);   
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>console.log(data))
.catch((error)=>console.log(error))
