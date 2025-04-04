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
    id: 56,
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
var departmentList = employees.filter(function (record) {
  return record.dept == 'it';
});
console.log(departmentList);

var mapArr = employees.map((item) => {
  return { name: item.name, salary: item.salary };
});

console.log(mapArr, employees);

