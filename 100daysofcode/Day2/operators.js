//Arithmetic

console.log(8+9)

x = 2
y = '3'
z = x*y
console.log(z)


console.log(x/y)
console.log(x-y)
console.log(x**y)

//Assignment operator
let a = 10 

let b = 50
console.log(a+=10) //Addition Assignment
console.log(b-=2)  //Subtaction Assignment
console.log(a*=10) //Multiplication Assignment
console.log(a/=2) //Division Assignment
console.log(b%=2) //Remainder Assignment
console.log(a**10) //Exponentiation Assignment

// Bitwise ...Bit ...Bit 0 and 1

// 1 Byte = 8 Bits

// Bitwise AND
// Bitwsie OR
// Bitwise XOR
// Bitwise NOT
// Left shift
// Right Shift

/*
Bitwise And 0 ===> 0 
// I like zero's and i will give zeros

JavaScript Bitwise &
Bitwise AND & returns 1 if the corresponding bits of both operands are 1 else it returns 0.
Operand 1	Operand 2	AND    Operation
0	            0	    0 & 0  is 0
0	            1	    0 & 1  is 0
1	            0	    1 & 0  is 0
1	            1	    1 & 1  is 1



Bitwise OR 1 ==> 1 |
// I like 1 and i will give 1 

Operand 1	Operand 2	AND    Operation
0	            0	    0 & 0  is 0
0	            1	    0 & 1  is 1
1	            0	    1 & 0  is 1
1	            1	    1 & 1  is 1


Bitwise XOR If you found same number 0  ^
// Differnet 1 
// same people 0
// differnent people 1


Operand 1	Operand 2	AND    Operation
0	            0	    0 & 0  is 0
0	            1	    0 & 1  is 1
1	            0	    1 & 0  is 1
1	            1	    1 & 1  is 0


// Bitwise NOT  ~

0 ===> 1
1 ===> 0




*/

// AND ==> &
// OR ===> |
// XOR ==> ^
// NOT ==> ~

// AND &

// Binary Number 0 and 1
/*
// Bytes
0 ==>      
1 ==>  
2 ==>
3 ==>
4 ==>
5 ==>
6 ==>
7 ==>
8 ==>
9 ==>
10 ==>
*/

  a = 10;
  b = 2;

console.log(a & b,"i AM FROM AND");
console.log(a | b);

console.log(a ^ b,"i AM XOR");

// 10 ==> 1010
// 2 ==>  0010
// ------------
//        0010  ==> 2



// 

// Not

let f = 10; // ~n = -(n+1)
console.log(~f); // -11

// a<<b left shift a  x  2 power (b)

let a1 = 10;
let b1 = 4;

console.log(a1 << b1); // 160

// a>>b right shift a / 2 power b

console.log(a1 >> b1); // 0



//Comparison
  a = 10;
  b = 10;
let c = 15;
let d = "10";
let e = "15";

console.log(a == b); // True
console.log(a == c); // False
console.log(a != b); // False
console.log(a == d); // True
console.log(a === d); // False
console.log(a !== d);// True
console.log(a > c); // False
console.log(a < e); // True
console.log(a >= b); // True
console.log(a <= d); // True


//Logical
  a = 10;
  b = 5;
console.log(a > b && b > a);
 
console.log(a > b || b > a);
 
  c = false
console.log(!c);
