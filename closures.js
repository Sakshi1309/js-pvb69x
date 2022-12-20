// Functions bundled together along with its outer lexical scope is know as clouser. This means whenever a function is returned, even if it is vanished in execution context it still remembers the reference it was pointing to.

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
