const sumAll = function (numFloor, numCeil) {
  if (!Number.isInteger(numFloor) || !Number.isInteger(numCeil)) return "ERROR";
  if (numFloor < 0 || numCeil < 0) return "ERROR";
  if (numFloor > numCeil) {
    const temp = numFloor;
    numFloor = numCeil;
    numCeil = temp;
  }
  let sum = 0;
  for (let i = numFloor; i < numCeil + 1; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
