const fibonacci = function (seqNumber) {
  seqNumber = Number(seqNumber);
  if (seqNumber == 0) {
    return 0;
  }
  if (seqNumber < 0) {
    return "OOPS";
  }
  const fibonacciArray = [1, 1];
  for (let i = 2; i < seqNumber; i++) {
    fibonacciArray.push(fibonacciArray[i - 2] + fibonacciArray[i - 1]);
  }
  // console.log(fibonacciArray);
  return fibonacciArray[seqNumber - 1];
};

// Do not edit below this line
module.exports = fibonacci;
