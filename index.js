// Import stylesheets
import './map/filter.js';
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

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

const arr1 = [];
const filArr = arr.filter((item) => {
  let dup = arr1.find((ele) => ele.id === item.id);
  console.log(dup);
  if (!dup) {
    arr1.push(item);
    return true;
  }
  return false;
});
console.log(filArr);

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

let function1 = () => {
  console.log(this);
};
let function2 = function () {
  console.log(this);
};

window.addEventListener('load', function1);
window.addEventListener('load', function2);

document.getElementById('btn1').addEventListener('click', function1);
document.getElementById('btn2').addEventListener('click', function2);
