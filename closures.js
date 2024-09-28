// Functions bundled together along with its outer lexical scope is know as clouser. This means whenever a function is returned, even if it is vanished in execution context it still remembers the reference it was pointing to.

function a() {
  var val = 10;
  function b() {
    console.log(val);
  }
  b(); // Prints 10
}
a();

function a() {
  var val = 10;
  function b() {
    console.log(val);
  }
  return b; // Prints 10
}
const c = a();
c();

function a() {
  var val = 10;
  return function b() {
    console.log(val);
  };
}
const c = a();
c();

function x() {
  var a = 1;
  return function y() {
    var b = 2;
    return function z() {
      console.log(a, b);
    };
  };
}
x()()();

//-----------------------------------------------------
//    Prints 1
//           2
//           3
//           4
//           5

function xyz() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
    abc(i);
  }
}
xyz();

function xyz() {
  for (var i = 1; i <= 5; i++) {
    function abc(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
    abc(i);
  }
}
xyz();

//-----------------------------------------------------
