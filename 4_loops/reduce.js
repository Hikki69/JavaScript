const myNums = [1,2,3]

// const mytotal = myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// },3)
const mytotal = myNums.reduce((acc,currval)=>acc+currval,3)
console.log(mytotal);
