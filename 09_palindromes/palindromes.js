const palindromes = function (words) {
  let foreward = words.replaceAll("!", "");
  foreward = foreward.replaceAll(".", "");
  foreward = foreward.replaceAll(",", "");
  foreward = foreward.toLowerCase();
  forewardArr = foreward.split(" ");
  foreward = forewardArr.join("");
  // console.log(foreward);
  let backwardArr = [];
  for (let i = foreward.length - 1; i >= 0; i--) {
    backwardArr.push(foreward[i]);
  }
  const backward = backwardArr.join("");
  if (foreward == backward) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
