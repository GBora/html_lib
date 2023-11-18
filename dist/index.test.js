"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const chai = __importStar(require("chai"));
const expect = chai.expect;
describe('div function', () => {
    it('should be able to wrap contents in div tag', () => {
        expect((0, index_1.div)('foo')).to.equal('<div>foo</div>');
    });
    it('should be able to wrap contents in div tag and apply an class attribute', () => {
        expect((0, index_1.div)('foo', { name: "class", value: "bar" })).to.equal('<div class="bar">foo</div>');
    });
    it('should be able to wrap contents in div tag and apply an class attribute and an id', () => {
        expect((0, index_1.div)('foo', [{ name: "class", value: "bar" }, { name: "id", value: "foobar" }])).to.equal('<div class="bar" id="foobar">foo</div>');
    });
});