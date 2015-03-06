(function() {
  'use strict';
  var trailingSlashIfNecessary = function(url) { 
    return url.substr(-1) !== '/' ? url + '/' : url;
  };

  var urlconcat = function() {
    var args = arguments;

    var concatted = '';
    for (var i = 0; i < args.length - 1; i++) {
      concatted += trailingSlashIfNecessary(args[i]);
    }
    return concatted += args[args.length - 1];
  };

  if (typeof define === 'function' && define.amd) {
    define(function() {
      return urlconcat;
    });
  }
  else if (typeof module !== 'undefined' && module.exports) {
    module.exports.concat = urlconcat;
  }
  else {
    this.urlconcat = urlconcat;
  }
}.call(this));