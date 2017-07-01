/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse
 * @fileoverview Markdown parser.
 */

'use strict';

/* Dependencies. */
var unherit = require('unherit');
var Parser = require('./lib/parser.js');

/* Expose */
module.exports = exports = parse;
exports.Parser = Parser;

/**
 * Attacher.
 *
 * @param {unified} processor - Unified processor.
 */
function parse(options) {
    var Local = unherit(Parser);
    Local.prototype.options = xtend(Local.prototype.options, this.data('settings'), options);
    this.Parser = Local;
}
