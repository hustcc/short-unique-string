/**
 * id 生成器
 * @returns {Function}
 */
module.exports = function() {
  var id = 0;

  return function() {
    return id ++;
  }
};
