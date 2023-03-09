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

//Shallow and Deep copy in Objects

//Shallow Copy
let obj1 = {
  message: 'Hello world',
  name: 'Sakshi',
  age: 26,
  address: {
    city: 'Ranchi',
    state: 'Jharkhand',
  },
};
let shallow1 = { ...obj1 };
let shallow2 = Object.assign({}, obj1);
shallow1.message = 'This is a shollow copy example1';
shallow1.address.city = 'Bihar';
shallow2.message = 'This is a shollow copy example2';
shallow2.address.city = 'UP';
console.log('First obj', obj1);
// {
//   "message": "Hello world",
//   "name": "Sakshi",
//   "age": 26,
//   "address": {
//       "city": "UP",
//       "state": "Jharkhand"
//   }
// }
console.log('shallow1', shallow1);
// {
//   "message": "This is a shollow copy example1",
//   "name": "Sakshi",
//   "age": 26,
//   "address": {
//       "city": "UP",
//       "state": "Jharkhand"
//   }
// }
console.log('shallow2', shallow2);
// {
//   "message": "This is a shollow copy example2",
//   "name": "Sakshi",
//   "age": 26,
//   "address": {
//       "city": "UP",
//       "state": "Jharkhand"
//   }
// }

// Deep copy
let obj1 = {
  message: 'Hello world',
  name: 'Sakshi',
  age: 26,
  address: {
    city: 'Ranchi',
    state: 'Jharkhand',
  },
};
let deepCopy = JSON.parse(JSON.stringify(obj1));
deepCopy.address.city = 'Bihar';
deepCopy.message = 'This is a deep copy example';
console.log('deepCopy', deepCopy);
// {
//   "message": "This is a deep copy example",
//   "name": "Sakshi",
//   "age": 26,
//   "address": {
//       "city": "Bihar",
//       "state": "Jharkhand"
//   }
// }
console.log('obj1', obj1);
// {
//   "message": "Hello world",
//   "name": "Sakshi",
//   "age": 26,
//   "address": {
//       "city": "Ranchi",
//       "state": "Jharkhand"
//   }
// }

const foo = {
  name: 'Sakshi',
  address: {
    city: 'Ranchi',
  },
};
const bar = {
  address: {
    city: 'Bihar',
  },
  name: 'Kumari',
};

bar.name = 'Sakshi';
bar.address.city = 'Ranchi';

//stringify will gives us true when both objects are in same order
console.log(JSON.stringify(foo) === JSON.stringify(bar)); //False
console.log(_.isEqual(foo, bar)); //True
