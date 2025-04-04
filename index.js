// Import stylesheets
// import './javascript/map-filter-reduce/map.js';
// import './map/filter.js';
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let function1 = () => {
  console.log(this);
};
let function2 = function () {
  console.log(this);
};

window.addEventListener('load', function1);
window.addEventListener('load', function2);

document.getElementById('btn1').addEventListener('click', function1);
document.getElementById('btn2').addEventListener('click', function2);
