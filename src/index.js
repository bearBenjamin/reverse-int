module.exports = function reverse(n) {
  const nStr = Math.abs(n).toString();
  const nStrArray = nStr.split('');
  const resultArray = [];

  for (let i = nStrArray.length - 1; i >= 0; i -= 1) {
    resultArray.push(nStrArray[i]);
  }

  const result = Number(resultArray.join(''));
  return result;
};
