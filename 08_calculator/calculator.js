const add = function(a, b) {
  return +a + +b;
	
};

const subtract = function(a, b) {
  return +a - +b;
	
};

const sum = function(array) {
	return (array.length == 0 ? 0 : array.reduce((sum, a) => sum + a));
};

const multiply = function(array) {
  return array.reduce((product, a) => product * a, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  let result = 1;
  for (let i = a; i > 0; i--) {
    result *= i;
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
