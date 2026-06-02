// Immediately Invoked Function Expression (IIFE)


(function garmi(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // ";" is in the end to terminate the context of IIFE

((name)=> {
    // unnamed IIFE
    console.log(`DB CONNECTED ${name}`);
})('harsh') 