const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const arrayNumbers = String(n).split('');

  let result = 0;
  arrayNumbers.forEach((el) => {
    result = result + Number(el);
  });

  return result >= 10 ? getSumOfDigits(result) : result;
}

module.exports = {
  getSumOfDigits,
};
