const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  let result = 0;
  const numbers = String(n).split('');

  for (let i = 0; i < numbers.length; i++) {
    let num = 0;
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        num = num * 10 + Number(numbers[j]);
      }
    }
    result = Math.max(num, result);
  }

  return result;
}

module.exports = {
  deleteDigit,
};
