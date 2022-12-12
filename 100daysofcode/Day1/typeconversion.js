//Type Conversions



    //implicit
// numeric string used with + gives string type
let result;

result = '3' + 2; 
console.log(result)  
result = '3' + true; 
console.log(result);  
result = '3' + undefined; 
console.log(result);  
result = '3' + null; 
console.log(result);  

let num;

num = '4' - '2'; 
console.log(num); 

num = '4' - 2;
console.log(num);  

num = '4' * 2;
console.log(num);  

num = '4' / 2;
console.log(num);  

//Explixcit:

//  to string
let a;
a = String(324);
console.log(a);  
 
 
a = String(true);
console.log(a);  
 
 
a = (324).toString();
console.log(a);   

a = true.toString();
console.log(a);  


//to boolean
result = Boolean(324);
console.log(result);  

result = Boolean('hello');
console.log(result);  

result = Boolean(' ');
console.log(result); 