// var obj = {
//     a: "hello",
//     b: 42,
//     c: true
// }
// console.log(obj.a);
// console.log(obj.b);
// console.log(obj.c);

// var arr = [
//     "goodbye",
//     24,
//     false
// ]
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr.length);
// console.log(typeof arr);


// Built-In Type Methods
// var a = "hello";
// var b = 3.14159;
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(typeof(a))
// console.log(a.length);
// console.log(a.toUpperCase());
// console.log(b.toFixed(4));

// Variables

// Hoisting

// var a = 2;

// foo();

// function foo() {
//     var a = 3;
//     console.log(a);
// }

// console.log(a);

// Conditionals

//Strict Mode (added in ES5)

// 
// Functions As Values

// Immediately Invoked Function Expressions (IIFEs)

// (function IIFE(){
//     console.log("IIFE was invoked immediately.")
// })();

// Closure

// function makeAdder(x) {
//     // parameter 'x' is an inner variable.

//     // inner function 'add()' uses 'x'
//     // so it has a "closure" over it
//     function add(y) {
//         return y + x
//     };

//     return add;
// }

// var plusOne = makeAdder(1);
// var plusTen = makeAdder(10);
// console.log(plusOne(3));
// console.log(plusOne(41));
// console.log(plusTen(13));

// function User(){
// 	var username, password;

// 	function doLogin(user,pw) {
// 		username = user;
// 		password = pw;
// 		// do the rest of the login work
// 	}

// 	var publicAPI = {
// 		login: doLogin
// 	};

// 	return publicAPI;
// }

// // create a `User` module instance
// var fred = User();

// fred.login( "fred", "12Battery34!" );

// This

// function foo(){
//     console.log( this.bar);
// }

// var bar = "global";

// var obj1 = {
//     bar: "obj1",
//     foo: foo
// };

// var obj2 = {
//     bar: "obj2"
// };

// foo();
// obj1.foo();
// foo.call(obj2);
// new foo();

// Prototypes

// var foo = {
//     a: 42
// };

// // create 'bar' and link it to 'foo'
// var bar = Object.create(foo);

// bar.b = "hello world";

// console.log(bar.b);
// console.log(bar.a);

// Old & New

// Polyfilling

// console.log(Number.isNaN(NaN))

// if (!Number.isNan){
//     console.log("YES")
// }

// Transpiling

function foo (a = 2) {
    console.log (a);
}

foo();
foo(42);

http://lorempixel.com/640/480/nightlife
status