// -----------------------------------------------

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// ------------------------------------------------

// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// -----------------------------------------------
// Two dimensional Array
let array3 = [1, 2, 3, [4, 5], 6, [7, 8, 9], 0];
let array4 = [];
array3.forEach((item) => {
  if (item.length > 0) {
    item.forEach((ele) => array4.push(ele));
  } else {
    array4.push(item);
  }
});
console.log('Array one', array3);
console.log('Array two', array4);

// How the flat() method can be used to flatten an array in JavaScript?
// Answer: The flat() method is a built-in method in JavaScript that can be used to flatten an array. It takes a depth parameter, which specifies how many levels of nested arrays should be flattened. If no depth parameter is provided, it defaults to 1. Here's an example usage:

var nestedArray = [1, [2, [3, 4], 5], 6];
nestedArray.flat(); // returs [1, 2, Array(2), 5, 6]
nestedArray.flat(1); // returs [1, 2, Array(2), 5, 6]
nestedArray.flat(2); // returns [1, 2, 3, 4, 5, 6]
nestedArray.flat(Infinity); // returns [1, 2, 3, 4, 5, 6]

let num1 = [10, 15, 38, 20, 13];
let result = largestElement(2, 78);
function largestElement(x, val) {
  if (x === 1) {
    num1.push(val);
  } else if (x === 2) {
    return num1.reduce(
      (largest, current) => (current > largest ? current : largest),
      num1[0]
    );
  }
}

let str1 = 'sHaubhama';
let arr1 = str1.toLowerCase().split('').sort();
let freqency = {};
for (let char of arr1) {
  if (!freqency[char]) {
    freqency[char] = 1;
  } else {
    freqency[char]++;
  }
}
const characters = Object.keys(freqency).sort();

// Iteration in an array // of prints the value where as in prints the key
// for (let i of array2) {
//   console.log('Value ' + i); // prints value
// }
// for (let i in array2) {
//   console.log('Index ' + i); // Prints key
// }

// Import stylesheets
let str2 = 'Riya, Priya, Tniya, Soumiya';
let arr = str2.split('');
let newArr = arr.filter((item, index) => {
  if (arr.indexOf(item) == index) {
    return item;
  }
});
console.log(newArr.join('')); //outPut "Riya, PrTnSoum"

let array = [1, 2, 3, 4, 5, 5, 4, 3, 6, 7, 8];
let duplicate = [];
array.filter((item) => {
  if (!duplicate.includes(item)) {
    duplicate.push(item);
  }
});
console.log(duplicate);

array = array.filter((item, index) => {
  if (array.indexOf(item) == index) return item;
});
console.log(array);

let output = sumOfNum(74231);
function sumOfNum(arg) {
  let sum = 0;
  while (arg) {
    sum += arg % 10;
    arg = Math.floor(arg / 10);
  }
  return sum;
}

var value = 2568,
  sum = value
    .toString()
    .split('')
    .map(Number)
    .reduce((a, b) => {
      return a + b;
    }, 0);

console.log(sum);

let str3 = 'India is my country';
let newStr1 = str3
  .split(' ')
  .map((item) => {
    item = item.split('').reverse().join('');
    item =
      item.charAt(0).toUpperCase() +
      item.substr(1, item.length - 2) +
      item.charAt(item.length - 1).toLowerCase();
    return item;
  })
  .join(' ');
newStr1;

//Shallow Copy
let array1 = [3, 4, [5, 6], [7, 8, 9], [0, 1, 2, 89, 97]];
let clonedArray1 = [...array1];
clonedArray1[2][1] = 9;

console.log(array1);
// [3, 4, [5, 9], [7, 8, 9], [0, 1, 2, 89, 97]];

console.log(clonedArray1);
// [3, 4, [5, 9], [7, 8, 9], [0, 1, 2, 89, 97]];

//Deep Copy
let array2 = [3, 4, [5, 6], [7, 8, 9], [0, 1, 2, 89, 97]];
let clonedArray2 = JSON.parse(JSON.stringify(array2));
clonedArray2[2][1] = 9;

console.log(array2);
// [3, 4, [5, 6], [7, 8, 9], [0, 1, 2, 89, 97]];

console.log(clonedArray2);
// [3, 4, [5, 9], [7, 8, 9], [0, 1, 2, 89, 97]];

let str4 = 'sakshi kumari';
function capitalize(str4) {
  let result = str4.map((item) => {
    item = item.charAt(0).toUpperCase() + item.slice(1);
    return item;
  });
  return result.join(' ');
}
let newStr = capitalize(str4.split(' '));
console.log(newStr);

let str5 = 'sakshi kumari';
let first = str5.charAt(0).toUpperCase() + str5.slice(1);

var ourMusic = [
  {
    artist: 'Daft Punk',
    title: 'Homework',
    release_year: 1997,
    formats: ['CD', 'Cassette', 'LP'],
    gold: true,
  },
  {
    artist: 'Daft Punk',
    title: 'Homework',
    release_year: 2000,
    formats: ['CD', 'Cassette', 'LP'],
    gold: false,
  },
  {
    artist: 'Daft Punk',
    title: 'Homework',
    release_year: 1980,
    formats: ['CD', 'Cassette', 'LP'],
    gold: true,
  },
];
// ['CD', 'Cassette', 'LP', 'CD', 'Cassette', 'LP', 'CD', 'Cassette', 'LP']

let newArray = [];
let newArray2 = [];
ourMusic.forEach((item) => {
  if (item.formats.length) {
    item.formats.forEach((ele) => {
      newArray.push(ele);
    });
  }
});
console.log(newArray);

let filterArray = [];
newArray.forEach((item) => {
  if (!filterArray.includes(item)) {
    filterArray.push(item);
  }
});

// function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = 'xyz';
//   let age = 24;
// }
// sayHi();

// ------------------------------------------------

// console.log('start');
// setTimeout(() => {
//   console.log('timeout 1');
// }, 0);
// Promise.resolve().then(() => console.log('promise'));
// console.log('end');

// -------------------------------------------------

// const fs = require('fs');

// console.log('1. sync start');

// setTimeout(() => {
//   console.log('2. setTimeout');
// }, 0);

// setImmediate(() => {
//   console.log('3. setImmediate');
// });

// fs.readFile(__filename, () => {
//   console.log('4. fs.readFile');

//   setTimeout(() => console.log('5. inner setTimeout'), 0);
//   setImmediate(() => console.log('6. inner setImmediate'));

//   Promise.resolve().then(() => console.log('7. promise inside fs'));
// });

// Promise.resolve().then(() => {
//   console.log('8. promise');
// });

// process.nextTick(() => {
//   console.log('9. nextTick');
// });

// console.log('10. sync end');

// --------------------------------------

// function secondLargest(arr) {
//   let largest = 0;
//   let secondLargest = 0;
//   for (let num of arr) {
//     if (num > largest) {
//       secondLargest = largest;
//       largest = num;
//     } else if (num > secondLargest && num < largest) {
//       secondLargest = num;
//     }
//   }
//   return secondLargest;
// }

// console.log(secondLargest([10, 20, 4, 45, 99, 99]));

// let arr = [10, 20, 4, 45, 99, 99];
// let newArr = [...new Set(arr)];
// newArr.sort((a, b) => b - a);
// console.log(newArr[1]);

// -------------------------------------------------

const multiDimArray = [1, [2, 3, [4, 5]], [6, [7, 8, [9, 10]], 11], 12];
// output: [ 1, 2, 3, 4,  5, 6,  7, 8, 9, 10, 11, 12]
function flattenArray(arr) {
  let result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

console.log('Try programiz.pro', flattenArray(multiDimArray));

// ------------------------------------------

let arr1 = [
  { name: 'A', age: 34 },
  { name: 'B', age: 35 },
  { name: 'A', age: 67 },
  { name: 'ABC', age: 34 },
  { name: 'ABC', age: 344 },
  { name: 'ABC', age: 36 },
];
// output :- {A: 2, B: 1, ABC: 3}
const count = {};
arr1.forEach((item) => {
  if (count[item.name]) {
    count[item.name] += 1;
  } else {
    count[item.name] = 1;
  }
});
console.log('count obj', count);

// --------------------------------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const evenNumber = filterEven((num) => num % 2 === 0, numbers);
// //output = [2,4,6,8]

// function filterEven(fn, arr) {
//   let result = [];
//   arr.forEach((item) => {
//     if (fn(item)) {
//       result.push(item);
//     }
//   });
//   return result;
// }
// console.log('Try programiz.pro', evenNumber);

// -------------------------------------

// const addNumber = createBase(6);
// addNumber(10); // 16
// addNumber(15); // 21

// function createBase(num) {
//   var a = num;
//   return function (num2) {
//     return num + num2;
//   };
// }
// console.log('Try programiz.pro', addNumber(15));

// ------------------------------------------------

// const input = 'Hello world this is test';
// //output: "olleh dlrow siht si tset";
// function reverseString(str) {
//   let result = '';
//   let word = '';
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== ' ') {
//       word = str[i] + word;
//     } else {
//       result += word + ' ';
//       word = '';
//     }
//   }
//   result += word;
//   return result;
// }
// const output = reverseString(input);
// console.log('Try programiz.pro', output);
