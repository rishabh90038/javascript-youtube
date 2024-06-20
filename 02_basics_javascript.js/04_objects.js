const obj1={
    1:"a",
    2:"b",
}
const obj2={
    3:"c",
    4:"d",
}

const obj3= Object.assign({},obj1,obj2)  // here we are merging the 2 objets in one
console.log(obj3)

const obj4={...obj1,...obj2}
console.log(obj4)

console.log(Object.keys(obj1))// here we can fetch the keys and value of the object as well using this technique

// we can take any object and go to the console, suppose we take an object and go to the console and get the prototype there which tells 
// different functions ome can use for the objects.