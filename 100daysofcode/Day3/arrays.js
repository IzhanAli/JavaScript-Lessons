let num = [2,4,6,8,10]

console.log(num.length)

let desc = num.reverse()
console.log(desc)




//pop
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale'];
console.log(plants.pop());
//push
console.log(plants.push('tomato'))

plants.forEach((element) => {
    console.log(element)
});


let myarr =[];
for (let i = 0; i < 5; i++) {
    myarr[i]=Math.floor(Math.random()*90+10)
    
}
console.log(myarr.sort())