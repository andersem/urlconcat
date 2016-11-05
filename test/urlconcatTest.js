'use strict';
var buster = require('buster');
var assert = buster.referee.assert;
var urlconcat = require('../urlconcat');

buster.testCase("urlconcat", {
  'should put slash between two parts': function () {
    assert.equals(urlconcat.concat('http://localhost:8080', 'search'), 'http://localhost:8080/search');
  },

  'should not put slash between two parts if there already is one': function () {
    assert.equals(urlconcat.concat('http://localhost:8080/', 'search'), 'http://localhost:8080/search');
  },

  'should add slash between three parts': function () {
    assert.equals(urlconcat.concat('http://localhost:8080/', 'search', 'something'),
      'http://localhost:8080/search/something');
  },

  'should leave slash in url part': function () {
    assert.equals(urlconcat.concat('http://localhost:8080/', 'search/something'),
      'http://localhost:8080/search/something');
  },

  'should omit double slashes': function () {
    assert.equals(urlconcat.concat('http://localhost:8080/', '/search/', '/something'),
      'http://localhost:8080/search/something');
  },

  'should accept query parameters': function () {
    assert.equals(urlconcat.concat('http://localhost:8080/', '?a=b&c=d'),
      'http://localhost:8080/?a=b&c=d');
    assert.equals(urlconcat.concat('http://localhost:8080', '?a=b&c=d'),
      'http://localhost:8080?a=b&c=d');
  }
});
