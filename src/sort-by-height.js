const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = arr
    .map((item) => (item === -1 ? undefined : item))
    .sort((a, b) => a - b);

  return arr.map((item) => {
    if (item === -1) return -1;
    return newArr.shift();
  });
}

module.exports = {
  sortByHeight,
};
