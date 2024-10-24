const arr = [5, 1, 2, 6, 3];

//find sum of all elements
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sum(arr));

//Using reduce
const output = arr.reduce(function (acc, curr) {
  acc += curr;
  return acc;
}, 0);
console.log(output);

//find maximum
function maximum(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(maximum(arr));

//Using reduce
const output3 = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);
console.log(output3);

const users = [
  { firstname: 'sakshi', lastname: 'kumari', age: 28 },
  { firstname: 'shubham', lastname: 'kumar', age: 29 },
  { firstname: 'satyam', lastname: 'raj', age: 28 },
  { firstname: 'swati', lastname: 'kumari', age: 34 },
];

//Find the {age: count, age:count, age:count}
//{28:2, 29:1, 34:1}

let userOutput = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(userOutput);

//Find the [list of first name whose age is greater than 24]
//[shubham, swati]

let userOutput = users.reduce(function (acc, curr) {
  if (acc[curr.age] > 28) {
    return acc[curr.firstname];
  }
}, {});

console.log(userOutput);
