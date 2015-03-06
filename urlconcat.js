'use strict';

var _ = require('lodash');

var trailingSlashIfNecessary = function (url) {
  return url.substr(-1) !== '/' ? url + '/' : url;
};

var urlconcat = function () {
  var args = arguments;

  return _.reduce(args, function (sum, s) {
    return trailingSlashIfNecessary(sum) + s;
  });

};

module.exports.concat = urlconcat;
