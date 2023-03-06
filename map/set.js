const newSet = new Set([4, 5, 6, 7]);
for (const i of newSet) {
  console.log(i);
} // Outputs Set {4,5,6,7}

const newSet2 = new WeakSet([3, 4, 5]); //Throws an error

let obj1 = {
  message: 'Hello world',
  name: 'Sakshi',
  age: 26,
  address: {
    city: 'Ranchi',
    state: 'Jharkhand',
  },
};

const newSet3 = new WeakSet([obj1]);

const ws = new WeakSet();
const foo = {
  name: 'Sakshi',
  address: {
    city: 'Ranchi',
  },
};
const bar = {
  name: 'Kumari',
  address: {
    city: 'Bihar',
  },
};
console.log(JSON.stringify(foo) === JSON.stringify(bar)); //False

bar.name = 'Sakshi';
bar.address.city = 'Ranchi';
console.log(JSON.stringify(foo) === JSON.stringify(bar)); //True

ws.add(foo);
ws.add(bar);

ws.has(foo); // true
ws.has(bar); // true

ws.delete(foo); // removes foo from the set
ws.has(foo); // false, foo has been removed
ws.has(bar); // true, bar is retained
