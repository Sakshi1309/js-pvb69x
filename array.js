// Two dimensional Array
let array1 = [1, 2, 3, [4, 5], 6, [7, 8, 9], 0];
let array2 = [];
array1.forEach((item) => {
  if (item.length > 0) {
    item.forEach((ele) => array2.push(ele));
  } else {
    array2.push(item);
  }
});
console.log('Array one', array1);
console.log('Array two', array2);

// Iteration in an array // of prints the value where as in prints the key
for (let i of array2) {
  console.log("Value " + i);
}
for (let i in array2) {
  console.log("Index " + i);
}