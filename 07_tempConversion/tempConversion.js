const convertToCelsius = function (tempInFahr) {
  const tempInCels = Math.round((tempInFahr - 32) * (5 / 9) * 10) / 10;
  return tempInCels;
};

const convertToFahrenheit = function (tempInCels) {
  const tempInFahr = Math.round((tempInCels * (9 / 5) + 32) * 10) / 10;
  return tempInFahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
