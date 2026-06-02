const myobject = {
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
}
// for in loop is used for objects
for (const key in myobject) {
    console.log(`${key} shortcut is for ${myobject[key]}`);
    
}

// for in loop for arrays
const programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
    console.log(key); // it prints the indexes of the array, key = indexes in array
}

// maps are not iteratable in for in loop