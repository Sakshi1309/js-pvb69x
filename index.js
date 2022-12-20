// Import stylesheets
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
var departmentList = employees.filter(function (record, index) {
  let dup = employees.find((i) => i.id === index);
  console.log(dup);

  return record;
});
console.log(departmentList);

var mapArr = employees.map((item) => {
  return { name: item.name, salary: item.salary };
});
