//Arithmetic operators
console.log("Arithmetic operators");
/*let a = 10;
let b = 5;
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus
console.log(a ** b); // Exponentiation*/

//Assignment operators
console.log("Assignment operators");
let c = 20;
console.log(c); // 20
c -= 5;
console.log(c); // 15
c *= 2;
console.log(c); // 30
c /= 3;
console.log(c); // 10
c %= 4;
console.log(c); // 2
c **= 3;
console.log(c); // 8

//Comparison operators
console.log("Comparison operators");
let a = 10;
let b = 20;
console.log(a==b); // false
console.log(a!=b); // true
console.log(a===b); // false
console.log(a!==b); // true
console.log(a>b); // false
console.log(a<b);      // true
console.log(a>=b); // false
console.log(a<=b); // true 

//Logical operators
console.log("Logical operators");
let x = 20;
let y = 10;
console.log(x > 15 && y < 15); // true
console.log(x > 15 || y < 5); // true
console.log(!(x > 15)); // false

//unary operators
console.log("Unary operators");
let num = 5;
console.log(num); // 5
num++;
console.log(num); // 6
num--;
console.log(++num); // 5
console.log(--num); // 4  

//Ternary operator
console.log("Ternary operator");
let age = 18;
let Vote = (age >= 18) ? "Yes" : "No";
console.log(Vote); // Yes