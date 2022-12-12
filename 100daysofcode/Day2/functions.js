//basic function

function hi(){

}
hi()

//parameters
function tablePrint(num){
    for(let i = 1; i<=10;i++){
        console.log(`${num} x ${i} = ${num*i}`)
    }
}
tablePrint(99)

function add(a,b){
    console.log(a+b)
}
add(7,8)

//create fn which gives sqrt
function root(num){
    console.log(Math.sqrt(num))
}

root(65)

function print(num,range){

    for (let index = num; index < range; index++) {
console.log(range)        
    }
}

print(5,10)

function sqr(num){
    console.log(Math.pow(num))
}
sqr(5)

function names(a,b){
    console.log(`My first name is ${a}, second name is ${b}`)
}
names("doE","john")

function isEven(num){
    if(num%2==0){
        console.log("even")
    }else{
        console.log("odd")

    }
}

// for (let index = 0; index < 20; index++) {
    
//     console.log(Math.floor(Math.random()*100))
// }
//random range

function random(min,max){


    console.log(Math.floor(Math.random()*(max - min+1)+min))
}


//enter the digits which u want random
function rand(digits){
    let n = 1

    for (let index = 0; index <digits ; index++) {
    
        n= n*10;
        
    }
    
    for (let index = 0; index < 5; index++) {
        console.log(Math.floor(Math.random()*n))

        
    }

}

rand(3)


//return
function names(params) {
    return params
    console.log(params)
}

console.log(names('test'))