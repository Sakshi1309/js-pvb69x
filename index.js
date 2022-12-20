// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;





let hero = {
  powerLevel: 99,
  getPower() {
    return this.powerLevel;
  },
};

let getPower = hero.getPower;

let hero2 = { powerLevel: 42 };
console.log(getPower.apply(hero));
console.log(getPower.apply(hero2));
