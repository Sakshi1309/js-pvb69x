// Two dimensional Array
let array1 = [1, 2, 3, [4, 5], 6, [7, 8, 9], 0];
let array2 = [];
array1.forEach((item) => {
  if (item.length > 0) {
    item.forEach((ele) => array2.push(ele));
  } else {
    array2.push(item);
  }
});
console.log('Array one', array1);
console.log('Array two', array2);

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

let str = 'sHaubhama';
let arr = str.toLowerCase().split('').sort();
let freqency = {};
for (let char of arr) {
  if (!freqency[char]) {
    freqency[char] = 1;
  } else {
    freqency[char]++;
  }
}
const characters = Object.keys(freqency).sort();

// Iteration in an array // of prints the value where as in prints the key
for (let i of array2) {
  console.log('Value ' + i); // prints value
}
for (let i in array2) {
  console.log('Index ' + i); // Prints key
}

// Import stylesheets
let str = 'Riya, Priya, Tniya, Soumiya';
let arr = str.split('');
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

let str = 'India is my country';
let newStr = str
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
newStr;

//Shallow Copy
let array1 = [3, 4, [5, 6], [7, 8, 9], [0, 1, 2, 89, 97]];
let clonedArray1 = [...array1];
clonedArray1[2][1] = 9;

console.log(array1);
// [3, 4, [5, 9], [7, 8, 9], [0, 1, 2, 89, 97]];

console.log(clonedArray1);
// [3, 4, [5, 9], [7, 8, 9], [0, 1, 2, 89, 97]];

//Deep Copy
let array1 = [3, 4, [5, 6], [7, 8, 9], [0, 1, 2, 89, 97]];
let clonedArray1 = JSON.parse(JSON.stringify(array1));
clonedArray1[2][1] = 9;

console.log(array1);
// [3, 4, [5, 6], [7, 8, 9], [0, 1, 2, 89, 97]];

console.log(clonedArray1);
// [3, 4, [5, 9], [7, 8, 9], [0, 1, 2, 89, 97]];
