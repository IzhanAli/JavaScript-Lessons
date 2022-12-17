let array = [89,55,71,90,26,52]
//at
console.log(array.at(5)) 

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
//concat
const numbers = num1.concat(num2, num3);

console.log(numbers);
//fill
console.log(num1.fill(0))
console.log(num2.fill(6,1))
console.log(num3.fill(9,0,1))

//index
console.log(array.indexOf(2))

//slice

console.log(array.slice(-2 ))
console.log(array.slice(2,4))

//splice
array.splice(2,1,5,7)
console.log(array)

//map
// const newarr = numbers.map((num)=>{
//     num* 2
// }) 
const newarr = numbers.map((num) => num*2) 

console.log(newarr)









