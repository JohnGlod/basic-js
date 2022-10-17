const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!");
  let result = [];
  const commands = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const secondElem = arr[i + 1];
    switch (element) {
      case '--discard-next':
        if (i + 1 < arr.length - 1) {
          let skip = 0;

          if (secondElem && !commands.includes(secondElem)) {
            i++;
          } else {
            while (commands.includes(secondElem)) {
              if (secondElem === '--discard-next') {
                skip++;
              }
              i++;
            }

            i = i + 1 + skip;
          }
          result.push(null);
        }
        break;
      case '--discard-prev':
        if (result.length !== 0) {
          result.pop();
        }
        break;
      case '--double-next':
        if (i + 1 < arr.length) {
          result.push(secondElem);
        }
        break;
      case '--double-prev':
        if (!result.length !== 0) {
          result.push(result[result.length - 1]);
        }
        break;
      default:
        result.push(element);
        break;
    }
  }

  return result.filter((item) => !!item);
}

module.exports = {
  transform,
};
