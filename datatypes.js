//Primitive Data types:

//string
let foo = "String" 
foo = 'This'

//number
let num = 50 
num = 40.704 //float
num = NaN //not a number
num = Infinity
num = 88484455554454545488882n //big int
num = 3e19 //power0
console.log(num)
let s8 = 10 * "Suhail";//nan

//boolean
let bool = true; // false

//null
let empty = null;

//symbol
let symbol = Symbol(10);


//Non primitives: 
//Objects
//--arrays

let student ={
    name : "Izhan",
    roll : 2020,
    isMale:true
}
student = {
    name : "Izhan Ali",
    roll : 2020,
    class : "3rd",
    

}
student["grade"] = 'A'
//array
student.marks = [25,24,22]
student.marks[3]="fail"
console.log(student)