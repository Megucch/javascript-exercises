const sumAll = function (num1, num2) {
  if (
    typeof num1 !== "number" ||
    num1 < 0 ||
    typeof num2 !== "number" ||
    num2 < 0
  )
    return "ERROR";
  let result = 0;
  const values = [num1, num2];
  values.sort((a, b) => a - b);
  let sortNum1 = values[0];
  let sortNum2 = values[1];
  for (let i = sortNum1; i <= sortNum2; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
