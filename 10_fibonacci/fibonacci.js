const fibonacci = function (count) {
  if (count < 0) return "OOPS";
  if (count === 0) return 0;

  let firstNum = 1;
  let secondNum = 0;

  for (let i = 2; i <= count; i++) {
    let current = firstNum + secondNum;
    secondNum = firstNum;
    firstNum = current;
  }

  return firstNum;
};
// let fn = 1,
//   sn = 0,
//   current = fn + sn;

// function fib(num) {
//   while (num >= 0) {
//     current = fn;
//     console.log(current);
//     fn += sn;
//     sn = current;
//     num--;
//   }
// }
// fib(10);

// Do not edit below this line
module.exports = fibonacci;
