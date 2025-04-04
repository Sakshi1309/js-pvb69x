function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'xyz';
  let age = 24;
}
sayHi();

console.log('start');
setTimeout(() => {
  console.log('timeout 1');
}, 0);
Promise.resolve().then(() => console.log('promise'));
console.log('end');

function secondLargest(arr) {
  let largest = 0;
  let secondLargest = 0;
  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num < largest) {
      secondLargest = num;
    }
  }
  return secondLargest;
}

console.log(this.secondLargest([10, 20, 4, 45, 99, 99]));

let arr = [10, 20, 4, 45, 99, 99];
let newArr = [...new Set(arr)];
newArr.sort((a, b) => b - a);
console.log(newArr[1]);

const multiDimArray = [1, [2, 3, [4, 5]], [6, [7, 8, [9, 10]], 11], 12];
//output: [ 1, 2, 3, 4,  5, 6,  7, 8, 9, 10, 11, 12]
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
const flattenedArray = flattenArray(multiDimArray);
console.log('Try programiz.pro', flattenedArray);

let arr = [
  { name: 'A', age: 34 },
  { name: 'B', age: 35 },
  { name: 'A', age: 67 },
  { name: 'ABC', age: 34 },
  { name: 'ABC', age: 344 },
  { name: 'ABC', age: 36 },
];
// output :- {A: 2, B: 1, ABC: 3}
const count = {};
arr.forEach((item) => {
  if (count[item.name]) {
    count[item.name] += 1;
  } else {
    count[item.name] = 1;
  }
});
console.log('count obj', count);

const input = 'Hello world this is test';
//output: "olleh dlrow siht si tset";
function reverseString(str) {
  let result = '';
  let word = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      word = str[i] + word;
    } else {
      result += word + ' ';
      word = '';
    }
  }
  result += word;
  return result;
}
const output = reverseString(input);
console.log('Try programiz.pro', output);
