const arr = [5, 1, 2, 6, 3];

//find double
function double(x) {
  return x * 2;
}
const output = arr.map(double);
console.log(output);

//find triple
function triple(x) {
  return x * 3;
}
const output2 = arr.map(triple);
console.log(output2);

//find binary
function binary(x) {
  return x.toString(2);
}
const output3 = arr.map(binary);
console.log(output3);

const users = [
  { firstname: 'sakshi', lastname: 'kumari', age: 28 },
  { firstname: 'shubham', lastname: 'kumar', age: 29 },
  { firstname: 'satyam', lastname: 'raj', age: 28 },
  { firstname: 'swati', lastname: 'kumari', age: 34 },
];

//Find the combination of first and last name

let userOutput = users.map((item) => item.firstname + ' ' + item.lastname);
console.log(userOutput);
