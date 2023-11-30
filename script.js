// //difference between undefined and null
// //undefined : a variable whose value is not assingned

// //What is hoisting, what is functional, block , & global scopr

// //functional scope and block scope

// //Automatic semicolon insertion
// let a = 5 * 6;
// console.log(a);
// function test() {
//   return {
//     a: 5,
//   };
// }

// const obj = test();
// console.log(obj);

// //Rest parameter and spread operator
// //rest operator
// function sum(...nums) {
//   console.log(nums);
// }
// sum(6, 7, 4, 5);
// sum(4, 5);

// //in es5 we have rest like parameter called argument, but it doesn't work with arrow function that why rest operator comes into the rescue. but in es6 we have rest
// let b = 4;
// let c = "value";
// if (!isNaN(b * c)) {
//   console.log("It is a number");
// } else {
//   console.log("Not a number");
// }

// console.log(isFinite(b * c));
// console.log(isFinite(5 * 4));
// console.log(isFinite(Number.MAX_VALUE));
// console.log(isFinite(Infinity));
// //Function declaration, expression, arrow function, IIFE
// //function declaration
// function sum() {
//   console.log(this);
// }
// sum();
// //now function expression
// const average = function (a, b) {
//   return (a + b) / 2;
// };
// //Arrow function
// const avg = () => console.log(this);
// //IIFE: immediately invoked function expression
// (function summ(a, b) {
//   console.log(a + b);
// })(2, 3);

// //IIFE with arrow function
// ((a, b) => {
//   console.log(a + b);
// })(7, 7);

// //Working of this keyword
// //In function declaration this points to the object,but in arrow function it points to the global object
// const objj = {
//   test: () => {
//     console.log(this); //Here this points to the object
//   },
// };
// objj.test();

//Closure: when a function comes under another function a closure us created
// outer = () => {
//   return () => {
//     console.log("inner called");
//   };
// };
// const cl = outer();
// cl();

// const addCounter = () => {
//   let counter = 0;
//   return () => {
//     counter++;
//     return counter;
//   };
// };
// const clo = addCounter();
// console.log(clo());
// console.log(clo());
// console.log(clo());

// // Currying : it's a way to call inner function where you can pass the argument partially

// const sum = (a) => (b) => a + b;
// const result = sum(5)(6);
// console.log(result);
// //Usage of currying

// const priceCalc = (a) => (b) => a * b;
// const discountAmount = priceCalc(300)(0.6);

// console.log(discountAmount);

// // console.log(arr);
// // console.log(arr.splice(arr.splice(arr.length)));
// // console.log(arr);

// const arrr = ["one", "two", "three", "four", "five", "six"];
// console.log(arrr.indexOf("two"));
// console.log(arrr.lastIndexOf("six"));
// console.log(arrr.includes("two"));
// console.log(arrr.indexOf(0));
// console.log(arrr.includes(7));
// console.log(arrr.lastIndexOf(8));
// console.log(arrr);
// const arr = [1, 2, 3, 4, 5, 6];
// //find and findIndex return the initial element based on the condition and filter method return new array based on the condition
// const array = arr.filter(function (ele) {
//   return ele > 2;
// });

// console.log(array);
// console.log(arr);
//Map function returns a new array
// const arr1 = [2, 3, 4, 5, 6, 7];
// let result = arr1.map((ele) => ele * ele);
// console.log(result);
// console.log(arr1);

// //Find the length of each element in an array

// const arr2 = ["one", "two", "three", "four"];
// console.log(arr2.map((ele) => ele.length));

// // Find the sqaure root of every element and store it in a new array
// const arr3 = [25, 16, 9, 4, 1];
// console.log(arr3.map((ele) => Math.sqrt(ele)));
// //Fetch all pName in new array
// let products = [
//   { pCode: 1, pName: "Apple" },
//   { pCode: 2, pName: "Banana" },
//   { pCode: 3, pName: "Grapes" },
//   { pCode: 4, pName: "Oranges" },
// ];

// console.log(products.map((ele) => ele.pName));
// products.map(function (ele, index) {
//   console.log(ele.pCode, ele.pName, index);
// });

// // reduce method: How to flatten two dimension array\
// //Find the sum and product of an all element in an array
// const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result4 = arr4.reduce((acc, ele) => (acc += ele), 0) / arr4.length;

// console.log(result4);
// //Flattening an array using reduce method

// let arr = [
//   [45, 90],
//   [5, 6],
//   [2, 4],
// ];
// console.log(arr);

// let fArr = arr.reduce((acc, curr) => acc.concat(curr), []);
// console.log(fArr);
// //Sum of the keyfield of an object literal: Sum of the salary
// const employees = [
//   { eNo: 1001, salary: 3000 },
//   { eNo: 1002, salary: 2200 },
//   { eNo: 1003, salary: 3400 },
//   { eNo: 1004, salary: 6000 },
// ];
// //  Note: Incase of object literal it is must to mentioned inital value
// const totalSalary = employees.reduce((acc, curr) => (acc += curr.salary), 0);
// console.log(totalSalary);

// //Sorting on abject literal
// console.log(employees.sort((a, b) => a.salary - b.salary));
// //another way
// const sorted = employees.sort((a, b) => {
//   if (a.salary < b.salary) {
//     return -1;
//   }
//   if (b.salary > a.salary) {
//     return 1;
//   }
//   if (a.salary === b.salary) {
//     return;
//   }
// });
// console.log(sorted);

// let toSort = [23, 32, 42, 5, 4];
// console.log(toSort.sort((a, b) => a - b));
// //another way
// const sorted1 = toSort.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   if (a === b) {
//     return;
//   }
// });
// console.log(sorted1);

// //Array destructuring
// let c = [11, 12, 13, 14];

// [a, b, c, d] = c;
// console.log(a, b, c, d);
// //Swapping the value using array destructuring

// let p = 2;
// let q = 4;
// [q, p] = [p, q];
// console.log(q, p);

// //slice method
// //substring cannot take negative values

// const str = "first second third fourth";
// console.log(str.slice());
// console.log(str.slice(2, 10));
// console.log(str.slice(-10));
// console.log(str.slice(-10, -2));
// console.log(str.substring(2, 10));
// console.log(str.charAt()); //take 0th index if null
// console.log(str.charAt(2));
// //charCodeAt() returns unicode value
// console.log(str.charCodeAt(1));
// console.log(str);
// //There are four ways to get date and time

// const dt = new Date();
// console.log(dt);
// //getTime() method is to get milliseconds from 1st june 1970
// console.log(dt.getFullYear());
// console.log(dt.getMonth());
// console.log(dt.getDate());
// console.log(dt.getDay());
// console.log(dt.getUTCFullYear());
// // dt.setFullYear(2020);
// // dt.setMonth(9);
// // dt.setDate(1);
// console.log(dt);
// //to get 50 days before current date
// dt.setDate(dt.getDate() - 50);

// console.log(dt);

// //time methods
// const dt1 = new Date();
// console.log(dt1);
// console.log(dt1.getTime()); //to get milliseoncs from 1 jan 1970
// console.log(dt1.getHours());
// console.log(dt1.getMinutes());
// console.log(dt1.getSeconds());
// console.log(dt1.getMilliseconds());
// let tv = "pCode";
// let obj = {
//   [tv]: 1001,
//   pName: "Apple",

//   //Property value short hand
//   getData() {
//     console.log(obj.pCode, obj.pName);
//   },
// };

// console.log(obj);
// //How you create clone or separate object: By using Object.assign
// let obj1 = Object.assign(obj);
// console.log(obj1);

// //Use of this
// // It contains the current context, this can have different value depend upon where it is placed

// const obj2 = {
//   test: () => {
//     console.log(this);
//   },
// };

// console.log(obj2);
//call(), apply() method

function test(a, b) {
  console.log(this); //Here this keyword points to the object
  console.log(a, b);
}
let obj3 = {
  a: 10,
};
//bind does not execute the function instead it returns another function, That is it acts like function expression
const fe = test.bind(obj3, 2, 3);

fe();

//call() and apply() method both are same, but in apply method we can pass only two argument, and 2nd argument is only an array..
