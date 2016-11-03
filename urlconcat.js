(function() {
  'use strict';
  var trailingSlashIfNecessary = function(urlPart, nextUrlPart) {
    if (nextUrlPart.substr(0, 1) === '?') {
      return urlPart;
    }
    return urlPart.substr(-1) !== '/' ? urlPart + '/' : urlPart;
  };

  var urlconcat = function() {
    var args = arguments;

    var concatted = '';
    for (var i = 0; i < args.length - 1; i++) {
      concatted += trailingSlashIfNecessary(args[i], args[i+1]);
    }
    concatted += args[args.length - 1];
    return concatted.replace(/([^:]\/)\/+/g, "$1");
  };

  if (typeof define === 'function' && define.amd) {
    define(function() {
      return {
        concat: urlconcat
      };
    });
  }
  else if (typeof module !== 'undefined' && module.exports) {
    module.exports.concat = urlconcat;
  }
  else {
    this.urlconcat = urlconcat;
  }
}.call(this));
