
//1. History of JS
//Microsoft is started a free browsing option. so, user like to use microsoft. Because Netscape is not free browser.
// In 1990 mosaic was a famous browser but it is not free. It is created Netscape. It is renamed Netscape Navgiator  
//Javascript was created by NestScape Communication Coropertion in 1995 by Brendan Eich to beat the microsoft company.
//Javascript was orginally called Mocha, later renamed as LiveScript, and finally settled on javaScript.
//Javascript is created as simple scripting language for interacting wed for users.
// Microsoftintroduced Jscript. it a similar version of javascript.
//In 1997, Javascript was standardization by European Computer Manufacturers Association (ECMA).
//Javascript has continually evloved with new features based ECMAScript standards.
//Every year new versions of js from 2016. previouly new version released but not every year.
//Javascript is placing very importent role in Web Application. Majority of companies used js to build wedsites compare to other languages. 
//Javascript is used as server side application(Node.js). This wedsites used in mobiles and desktops.


//2.Data Types in JavaScript - 1
//Data Types defination:It is useful to store data and data manuipaltion.
//There are two types Primitive and object types.
//primitive Data types are Numbers,Strings,Boolean, Null, Undefined and symbol
//NUmbers are used repersent int and float values. In this we can use Base number system like decimal,binary,octal and hexdecimal
//BigInt value is 9007199254740991 
console.log(9007199254740991+9007199254740991)
console.log(Number.MAX_VALUE *10)
console.log(Number.MAX_SAFE_INTEGER)
console.log(1.7976931348623159e+408)
console.log(200_200_200)
console.log(1000000000000000000000000000000)
console.log(1000000000000000000000000000000n)
let user = 7
console.log(user)
console.log(typeof user)
console.log(0b1010)
console.log(0o12)
console.log(1000n+2n)

//3. Data Types in JavaScript - 2
//String is sequences of letters are characters. it is enclosed in single, double quotes and backticks.
console.log("Hello, world!");
let c = "hemanth"
let d = "ram"
console.log(c + d);
console.log("hemanth \n ram")
console.log("hemanth\t\tram\nravi\vkuma\bar\br")
console.log('heamth"Ram"');

//Boolean is logical operator like true or false
console.log(3>2);
console.log(10<(2^2));
console.log("Ab"<"ab")
console.log(null, typeof null)

//Undefined means value is declared but not assigned.
let a;
console.log(a)
let b;
console.log(b)

//Null indicate that a varbile has no value.
let m = null;
console.log(m)

//NaN is a not a number
console.log(0/0)
console.log(1/"hello")
console.log(typeof (1/"hello"))

//4. Type Conversion and Coercion
//It is process of converting data type to another.it is also called as type casting or explict conversion. 
let r = "500"
console.log(Number(r),typeof Number(r))
let z =500
console.log(String(z), typeof String(z))
let s =  2<3
console.log(String(s),typeof String(s))

//Coercion
//It is implict conversion. it means automatically converts operands to the same data type to perfrom an operation.
let kk = 5-"10"
console.log(kk, typeof (kk))
kk = +kk+2
console.log(kk)

let jj = "5"*10
console.log(jj, typeof(jj))

console.log(Boolean(1))

console.log(parseInt("123 Ram"))
console.log(Number("123 Ram"))
console.log(parseInt("N123 RAM"))
console.log(Boolean("Navin"))
console.log(Boolean(null))


//5. Arithmetic Operators
//it is mathimatic symbol used to calucate value by adding(+), subtraction(-),multiplication(*) and division(/).
let x = 10
let y = 12 
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(++x)
console.log(true + true)
console.log(false-false)
console.log(x++)
console.log(2**3)
console.log(2%3)

//6. Relational Operators
//It is used to compare two values
let o = "Zero"
let t = "zero"
console.log(o<t)
console.log(o>t)
console.log(1==1)
console.log(1===2)
console.log("2" < 5)

//7. Logical Operators
//It is combinemultiple boolean expressions or alues and return a boolean result.
// There is two types AND(&&) and OR(||)
//AND 
console.log(true&&true)
console.log(false&&false)
//OR
console.log(true||false)
console.log(false||false)
//NOT
console.log(!true)
console.log(!false)

console.log(2>3 || 4>5 && 6<7 || 8<9 || !8)


//8.Ternary Operators
//it is shorthand way of performing conditional evaluations. In javascript ternary operator ('? :') allows you to excuate one of two exoressions based on a condition.
console.log(120%2===0 ? "even" : "odd")
console.log("Javascript"=="Javascript" ? "match" : "mismatch")
console.log("AA"<"aa" ? "true" : "false")
console.log("Javascript"==="javascript" ? "match" : "mismatch")


//9.Template Literals
// JavaScript that allows you to create strings with embedded expressions, multi-line text, and improved readability. They are enclosed by backticks (`) instead of single or double quotes.
//it replace if and else condition at some level
let num1 = 10
let num2 = 12
let result = num1 + num2
let result1 = num1* num2
console.log(`The addition of ${num1} and ${num2} is ${result}`)
console.log(`The multiplication ${num1} and ${num2} is ${result1}`)