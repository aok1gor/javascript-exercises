const convertToCelsius = function(f) {

  let result = ((f - 32) * 5 / 9).toFixed(1);

  if (result == 0) {
    return 0;
    }

  return Number(result);

};

const convertToFahrenheit = function(c) {

  let result = ((c * 9 / 5) + 32).toFixed(1);

  if (result == 0) {
    return 0;
  }

  return Number(result);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
