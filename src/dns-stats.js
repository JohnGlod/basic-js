const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};

  domains.forEach((val) => {
    let count = 1;
    const domain = val.split('.');
    let prewieDom = '';
    for (let i = domain.length - 1; i >= 0; i--) {
      const subDomain = domain[i];
      prewieDom += '.' + subDomain;
      count = 1;
      !result[prewieDom]
        ? (result[prewieDom] = count)
        : (result[prewieDom] += count);
    }
  });

  return result;
}

module.exports = {
  getDNSStats,
};
