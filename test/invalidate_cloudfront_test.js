'use strict';

var grunt = require('grunt');
require('coffee-script/');
var lib = require('../tasks/invalidate_cloudfront.coffee');


/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.invalidate_cloudfront = {
  setUp: function(done) {
    done();
  },
  default_options: function(test) {
    test.expect(3);

    var actual = grunt.file.read('test/expected/default_options');
    var expected = grunt.file.read('test/expected/default_options');
    test.equal(actual, expected, 'have scaffolding for the invalidations list.');
    test.equal(typeof lib, 'function', 'the library can consume the grunt object.');
    test.equal(typeof grunt.tasks, 'function', 'have scaffolding for the invalidations list.');

    test.done();
  }
};
