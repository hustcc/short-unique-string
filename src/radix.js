var Letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var Numbers = '0123456789';
var symbols = '~!@#$%^&*()_+<>?-=[]{}:;,/|';

module.exports = function(num, opts) {
  var formatter = Letters;

  opts = opts || {};
  if (opts.number) formatter = Numbers + formatter;
  if (opts.symbol) formatter += symbols;

  var radix = formatter.length;

  var result = '';

  do {
    var remainder = num % radix;

    result = formatter.charAt(remainder) + result;

    num = (num - remainder) / radix;
  } while (num !== 0);
  return result;
};
