var idGenerator = require('./id.js');
var radix = require('./radix.js');

module.exports = function(opts) {
  var id = idGenerator();

  return function() {
    return radix(id(), opts);
  }
};
