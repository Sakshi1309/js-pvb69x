// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// function x() {
//   var a = 1;
//   return function y() {
//     var b = 2;
//     return function z() {
//       console.log(a, b);
//     };
//   };
// }
// x()()();

// function xyz() {
//   for (var i = 1; i <= 5; i++) {
//     function abc(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     }
//     abc(i);
//   }
// }

// xyz();

// Functions bundled together along with its outer lexical scope is know as clouser. This means whenever a function is returned, even if it is vanished in execution context it still remembers the reference it was pointing to.

// const newSet = new Set([4, 5, 6, 7]);
// console.log(newSet); // Outputs Set {4,5,6,7}

// const newSet2 = new WeakSet([3, 4, 5]); //Throws an error

// let obj1 = { message: 'Hello world' };
// const newSet3 = new WeakSet([obj1]);
// console.log(newSet3.has(obj1));

// var employees = [
//   {
//     id: 20,
//     name: 'Ajay',
//     salary: 30000,
//     dept: 'it',
//   },
//   {
//     id: 24,
//     name: 'Vijay',
//     salary: 35000,
//     dept: 'hr',
//   },
//   {
//     id: 56,
//     name: 'Rahul',
//     salary: 32000,
//     dept: 'it',
//   },
//   {
//     id: 88,
//     name: 'Raman',
//     salary: 38000,
//     dept: 'hr',
//   },
// ];
// var departmentList = employees.filter(function (record) {
//   return record.dept == 'it';
// });
// console.log(departmentList);

// var mapArr = employees.map((item) => {
//   return { name: item.name, salary: item.salary };
// });

// console.log(mapArr, employees);

// const findVowels = (str) => {
//   let vowels = ['a', 'e', 'i', 'o', 'u'];
//   let arr = str.split('');
//   let count = 0;
//   console.log(arr);
//   for (let char of arr) {
//     let a = char;
//     // console.log(a)
//     let index = vowels.indexOf(a);
//     // console.log(index)
//     if (index != -1) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(findVowels('hello my name is nikki'));

// const rotateRight = (arr, rotation) => {
//   if (rotation == 0) return arr;
//   for (let i = 0; i < rotation; i++) {
//     arr.unshift(arr.pop());
//   }
//   console.log("rotateRight", arr);
//   return arr;
// };

// rotateRight([1, 2, 4, 5, 6], 4);

// const rotateleft = (arr, rotation) => {
//   if (rotation == 0) return arr;
//   for (let i = 0; i < rotation; i++) {
//     arr.push(arr.shift());
//   }
//   console.log("rotateleft", arr);
// };

// rotateleft([1, 2, 4, 5, 6], 2);

let hero = {
  powerLevel: 99,
  getPower() {
    return this.powerLevel;
  },
};

let getPower = hero.getPower;

let hero2 = { powerLevel: 42 };
console.log(getPower.apply(hero));
console.log(getPower.apply(hero2));
