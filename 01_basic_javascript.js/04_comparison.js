console.log(2>1)

//comparison operator works differently as equally operator 
//comparion coverts null value to zero then it compares
//eg;- null>=0 here this comparison will return true bacause null is first converted to 0 or you can say a number so the number is equal or greater than zero.
//++++++++++++++++++++++++++++++++++++++++++++++++++
let student=1
let teacher=student

console.log(teacher)
console.log(student)
student =4
console.log(teacher)
console.log(student)

let obj=
{
    name : "hero",
    age : "16",
}
let obj1=obj

obj.name="smart"

console.log(obj)
console.log(obj1)