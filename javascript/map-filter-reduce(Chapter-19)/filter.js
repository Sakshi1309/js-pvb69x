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

var employees = [
  {
    id: 20,
    name: 'Ajay',
    salary: 30000,
    dept: 'it',
  },
  {
    id: 24,
    name: 'Vijay',
    salary: 35000,
    dept: 'hr',
  },
  {
    id: 20,
    name: 'Rahul',
    salary: 32000,
    dept: 'it',
  },
  {
    id: 88,
    name: 'Raman',
    salary: 38000,
    dept: 'hr',
  },
];

const uniqueIds = [];
var departmentList = employees.filter((element) => {
  const duplicates = uniqueIds.includes(element.id);
  console.log(duplicates);
  if (!duplicates) {
    uniqueIds.push(element.id);
    return true;
  }
  return false;
});
console.log(departmentList);

var mapArr = employees.map((item) => {
  return { name: item.name, salary: item.salary };
});

const arr = [
  { id: 1, name: 'test1' },
  { id: 2, name: 'test2' },
  { id: 2, name: 'test3' },
  { id: 3, name: 'test4' },
  { id: 4, name: 'test5' },
  { id: 5, name: 'test6' },
  { id: 5, name: 'test7' },
  { id: 6, name: 'test8' },
];

function filterObj(arr) {
  const arr1 = [];
  arr.forEach((item) => {
    let dup = arr1.find((ele) => ele.id === item.id);
    if (!dup) {
      arr1.push(item);
    }
  });
  return arr1;
}
const result = filterObj(arr);
console.log('Try programiz.pro', result);

// const filteredArr = arr.reduce((acc, current) => {
//   console.log(acc, current);
//   const x = acc.find((item) => item.id === current.id);
//   console.log('x', x);
//   if (!x) {
//     return acc.concat([current]);
//   } else {
//     return acc;
//   }
// }, []);
// console.log(filteredArr);
