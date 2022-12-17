let num = [2,4,6,8,10]

console.log(num.length)

let desc = num.reverse()
console.log(desc)

const dynamic = ["String", 55, obj={
    key: "value",
    anotherkey: 'value'
},
true]

delete dynamic[2]
console.log(dynamic)

//pop
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale'];
console.log(plants.pop());
//push
console.log(plants.push('tomato'))

console.log("Removed: "+plants.shift())

//shift unshift

console.log(plants.unshift('spinach','fenugreek'))
plants.forEach((element) => {
    console.log(element)
});

let myarr =[];
for (let i = 0; i < 5; i++) {
    myarr[i]=Math.floor(Math.random()*90+10)
    
}
console.log(myarr.sort())


