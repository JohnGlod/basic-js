/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let array = [...str];
	let result = [];
	let countLetter = 1;

  for (let i = 0; i < array.length; i++) {
		const element = array[i];
		if (element === array[i + 1]) {
			countLetter++
		} else {
			if (countLetter > 1) {
				result.push(countLetter + element)
			} else {
				result.push(element)
			}

			countLetter = 1;
		}
	}
  return result.join('');
}

module.exports = {
  encodeLine,
};
