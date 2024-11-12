const findVowels = (str) => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let arr = str.split('');
  let count = 0;
  for (let char of arr) {
    let a = char;
    let index = vowels.indexOf(a);
    if (index != -1) {
      count++;
    }
  }
  return count;
};
console.log(findVowels('hello my name is nikki'));

//Unshift will add new values in the first index of an array
const rotateRight = (arr, rotation) => {
  if (rotation == 0) return arr;
  for (let i = 0; i < rotation; i++) {
    arr.unshift(arr.pop());
  }
  console.log('rotateRight', arr);
  return arr;
};

rotateRight([1, 2, 4, 5, 6], 4);

//Shift will remove first values from the first index of an array
const rotateleft = (arr, rotation) => {
  if (rotation == 0) return arr;
  for (let i = 0; i < rotation; i++) {
    arr.push(arr.shift());
  }
  console.log('rotateleft', arr);
};

rotateleft([1, 2, 4, 5, 6], 2);
