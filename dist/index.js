"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ul = exports.ol = exports.div = exports.li = exports.span = void 0;
const tagFunctionFactory_1 = require("./factories/tagFunctionFactory");
exports.span = (0, tagFunctionFactory_1.tagFunctionFactory)('span');
exports.li = (0, tagFunctionFactory_1.tagFunctionFactory)('li');
exports.div = (0, tagFunctionFactory_1.tagFunctionFactory)('div');
exports.ol = (0, tagFunctionFactory_1.tagFunctionFactory)('ol');
exports.ul = (0, tagFunctionFactory_1.tagFunctionFactory)('ul');
