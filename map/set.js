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
