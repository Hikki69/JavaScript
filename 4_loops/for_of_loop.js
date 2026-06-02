// for of loop

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world!"
for (const i of greetings) {
    // console.log(i);
}

// MAPS => only stores uniques values

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

// console.log(map);
for (const [key,value] of map) {
    console.log(key,":-" , value);
}

// Objects are not iterable by for of loop