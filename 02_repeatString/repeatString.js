const repeatString = function (word, times) {
  let finalString = "";
  if (times < 0) {
    return "ERROR";
  }
  for (let i = 0; i < times; i++) {
    finalString += word;
  }
  return finalString;
};

// Do not edit below this line
module.exports = repeatString;
