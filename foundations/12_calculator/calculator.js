const add = function(number1, number2) {
	return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1-number2;
};

const sum = function(numbers) {
  let result = 0;

  numbers.forEach((number) => {
    result += number;
  });

  return result;
};

const multiply = function(numbers) {

  let result = 1;
  numbers.forEach((number) => {
    result *= number;
  });
  return result;
};

const power = function(base, expoent) {

  let result = base;

  for (let i = 1; i < expoent; i++) {
    result *= base;
  }
	
  return result;
};

const factorial = function(number) {
	
  if (number == 0) {
    return 1;
  }

  let result = 1;

  for (let i = 1; i <= number; i++) {
    result *= i;
  }


  return result;
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
