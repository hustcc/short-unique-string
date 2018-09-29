var expect = require('expect');
var generator = require('..');

describe('short-unique-string', function() {
  it('generate', function() {
    var uniqueId = generator();
    expect(uniqueId()).toBe('a');
    expect(uniqueId()).toBe('b');

    for (var i = 0; i < 10000; i ++) {
      uniqueId();
    }

    expect(uniqueId()).toBe('dKs');
  });

  it('unique', function() {
    var uniqueId = generator();
    for (var i = 0; i < 10000; i ++) {
      expect(uniqueId()).not.toBe(uniqueId());
    }
  });

  it('opts', function() {
    var uniqueId = generator({
      number: true,
      symbol: true
    });

    expect(uniqueId()).toBe('0');
    expect(uniqueId()).toBe('1');

    for (var i = 0; i < 10000; i ++) {
      uniqueId();
    }

    expect(uniqueId()).toBe('1ny');

    for (var i = 0; i < 10000; i ++) {
      expect(uniqueId()).not.toBe(uniqueId());
    }
  });
});
