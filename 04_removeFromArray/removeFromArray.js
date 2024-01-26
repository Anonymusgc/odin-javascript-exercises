const removeFromArray = function (array, ...remove) {
  let finalArray = array.filter((value) => {
    for (let i = 0; i < remove.length; i++) {
      if (value === remove[i]) {
        return false;
      }
    }
    return value;
  });
  return finalArray;
};
// console.log(removeFromArray([1, 2, 3, 4], 3));
// Do not edit below this line
module.exports = removeFromArray;
