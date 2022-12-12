//for loop: Sum of even numbers upto 20
let n = 0;
for(i=1;i<=20;i++){
    
    if(i%2===0){
        n=i+n;
        
    }
}
console.log(n)

//while lloop: print 1-50 numbers
n=0
while(n<50){
    n++
    console.log(n)
}

//do while loop: Run a loop atleast once 
n = Math.floor(Math.random() * 90 + 10)
do{
console.log(n)
n = Math.floor(Math.random() * 90 + 10)

}while(n%2==0)
//break
for (let i = 1; i <= 5; i++) {
     if (i == 3) {
        break;
    }
    console.log(i);
}
// continue
for (let i = 1; i <= 5; i++) {

     if (i == 3) {
        continue;
    }

    console.log(i);
}

//switch
let veg = 'cucumber';
switch(veg) {
    case 'carrot':
    case 'raddish':
    case 'spinach':
        console.log(`${veg} is a vegetable.`);
        break;
    default:
        console.log(`${veg} is not a vegetable.`);
        break;
}