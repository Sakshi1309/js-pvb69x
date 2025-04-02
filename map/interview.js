function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'xyz';
  let age = 24;
}
sayHi();

console.log('start');
setTimeout(() => {
  console.log('timeout 1');
}, 0);
Promise.resolve().then(() => console.log('promise'));
console.log('end');

function secondLargest(arr) {
  let largest = 0;
  let secondLargest = 0;
  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num < largest) {
      secondLargest = num;
    }
  }
  return secondLargest;
}

console.log(this.secondLargest([10, 20, 4, 45, 99, 99]));

let arr = [10, 20, 4, 45, 99, 99];
let newArr = [...new Set(arr)];
newArr.sort((a, b) => b - a);
console.log(newArr[1]);
