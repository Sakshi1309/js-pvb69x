const arr = [5, 1, 2, 6, 3];

//find odd
function odd(x) {
  return x % 2;
}
const output = arr.filter(odd);
console.log(output);

//find even
function even(x) {
  return x % 2 === 0;
}
const output2 = arr.filter(even);
console.log(output2);

// greater than 4
const output3 = arr.filter((x) => x > 4);
console.log(output3);

const users = [
  { firstname: 'sakshi', lastname: 'kumari', age: 28 },
  { firstname: 'shubham', lastname: 'kumar', age: 29 },
  { firstname: 'satyam', lastname: 'raj', age: 28 },
  { firstname: 'swati', lastname: 'kumari', age: 34 },
];

//Find the [list of first name whose age is greater than 24]
//[shubham, swati]

let userOutput = users
  .filter((item) => {
    if (item.age > 28) {
      return item.firstname;
    }
  })
  .map((item) => item.firstname);

console.log(userOutput);
