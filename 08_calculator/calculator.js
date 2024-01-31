const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, item) => {
    return total + item;
  }, 0);
};

const multiply = function (array) {
  return array.reduce((total, item) => {
    return total * item;
  }, 1);
};

const power = function (a, b) {
  let pow = 1;
  for (let i = 0; i < b; i++) {
    pow *= a;
  }
  return pow;
};

const factorial = function (number) {
  let factorial = 1;
  for (let i = number; i > 1; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
