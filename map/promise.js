// Import stylesheets
import './style.css';
import { Observable } from 'rxjs';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const obs = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.next(4);
  observer.error('Error');
});

obs.subscribe({
  next(res) {
    console.log(res);
  },
  error(err) {
    console.log(err);
  },
  complete(msg) {
    console.log(msg);
  },
});

const ps = new Promise((resolve, reject) => {
  if (false) {
    resolve('promise resolved');
  } else {
    reject('promise rejected');
  }
});
let arr = [1, 2, 3, 4];
ps.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});
