const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition,
    additionRepeatTimes = 0,
    additionSeparator = '|',
  } = options;

  let result = '';
  result += str;

  let mix = '';

  if (options.hasOwnProperty('addition')) {
    mix += addition;
    if (additionRepeatTimes && additionRepeatTimes > 0) {
      for (let i = 2; i <= additionRepeatTimes; i++) {
        mix = mix + additionSeparator + addition;
      }
    }
  }

  result += mix;
  
  if (repeatTimes && repeatTimes > 0) {
    for (let i = 2; i <= repeatTimes; i++) {
      result = result + separator + str + mix;
    }
  }

  return result;
}
/* 

Ваша задача — реализовать функцию Repeater(str, options). Эта функция возвращает повторяющуюся строку на основе заданных параметров: str — повторяющаяся строка; options — это объект опций, который содержит свойства: RepeatTimes устанавливает количество повторений строки str; separator — строка, разделяющая повторения строки str; add — дополнительная строка, которая будет добавляться при каждом повторении строки str; addRepeatTimes устанавливает количество повторений добавления; addSeparator — это строка, разделяющая повторения сложения. 
Параметры str и add по умолчанию являются строками. В случае, когда тип этих параметров разный, их необходимо преобразовать в строку.
параметры separator и addSeparator являются строками. RepeatTimes и addRepeatTimes — целые числа (при отсутствии любого из них соответствующая строка не повторяется). Единственный обязательный параметр — это str, остальные можно не задавать. значение разделителя по умолчанию — «+». Значение по умолчанию для addSeparator — '|'. Например: Repeater('STRING', { RepeatTimes: 3, разделитель: '**', добавление: 'PLUS', addRepeatTimes: 3, addSeparator: '00' }) => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS' Напишите свой код в src/extended-repeater.js.

*/
console.log(
  repeater('TESTstr', {
    separator: 'ds',
    addition: 'ADD!',
    additionSeparator: ')))000',
  }),
  '|| TESTstrADD!'
);

module.exports = {
  repeater,
};
