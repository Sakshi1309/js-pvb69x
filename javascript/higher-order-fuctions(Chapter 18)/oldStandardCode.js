const radius = [3, 1, 2, 4];

const area = function (radius) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};
const circumference = function (radius) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};
const diameter = function (radius) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};

console.log(area(radius));
console.log(circumference(radius));
console.log(diameter(radius));
