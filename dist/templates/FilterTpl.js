'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * FilterTpl
 */
var FilterTpl =
/**
 *
 * @param name - the filter name
 */
function FilterTpl(name, isDir) {
  _classCallCheck(this, FilterTpl);

  this.type = 'filter';
  this.name = name;
  this.isDir = isDir;
};

exports.default = FilterTpl;