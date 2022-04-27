const add = function(a, b) {
	return +a + +b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, n) => total + +n, 0);
};

const multiply = function(array) {
  return array.reduce((ans, n) => ans * n, 1);
};

const power = function(n, exponent) {
	return n ** exponent;
};

const factorial = function(n) {
	let ans = 1;
  while(n > 1) {
    ans *= n--;
  }
  return ans;
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
