const add = function (i, j) {
  return i + j;
};

const subtract = function (i, j) {
  return i - j;
};

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function ([...args]) {
  let product = 1;
  for (let i = 0; i < args.length; i++) {
    product *= args[i];
  }
  return product;
};

const power = function (i, j) {
  return Math.pow(i, j);
};

const factorial = function (n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
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
