let obj1 = {
  message: 'Hello world',
  name: 'Sakshi',
  age: 26,
  address: {
    city: 'Ranchi',
    state: 'Jharkhand',
  },
};

let obj2 = {};

for (const i in obj1) {
  if (typeof obj1[i] === 'object') {
    obj2[i] = { ...obj1[i] };
  } else {
    obj2[i] = obj1[i];
  }
}

obj2.address.city = 'Bihar';
console.log(obj2);
console.log(obj1);
