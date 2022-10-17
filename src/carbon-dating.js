const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const k = 0.693 / HALF_LIFE_PERIOD;
  if (typeof sampleActivity !== 'string') return false;

  const val = parseFloat(sampleActivity);
  if (isNaN(val) || val > MODERN_ACTIVITY || val <= 0) return false;

  let age = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k;
  return age < 0 ? false : Math.ceil(age);
}

module.exports = {
  dateSample,
};
