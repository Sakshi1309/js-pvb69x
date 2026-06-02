//All Passes
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('P1 Success'), 3000);
});

const p2 = new Promise((resolve, reject) => {
  // P2 Failed
  setTimeout(() => resolve('P2 Success'), 1000);
  // setTimeout(() => reject('P2 Error'), 1000);
});

const p3 = new Promise((resolve, reject) => {
  // P3 Failed
  // setTimeout(() => resolve('P3 Success'), 2000);
  setTimeout(() => reject('P3 Failed'), 2000);
});

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
