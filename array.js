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

// Iteration in an array // of prints the value where as in prints the key
for (let i of array2) {
  console.log('Value ' + i);
}
for (let i in array2) {
  console.log('Index ' + i);
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
