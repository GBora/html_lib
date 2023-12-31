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
        const result = (0, index_1.div)('foo', { "class": "bar" });
        expect(result).to.equal('<div class="bar">foo</div>');
    });
    it('should be able to wrap contents in div tag and apply an class attribute and an id', () => {
        const result = (0, index_1.div)('foo', { "class": "bar", "id": "foobar" });
        expect(result).to.equal('<div class="bar" id="foobar">foo</div>');
    });
    it('should be able to take in multiple child elements', () => {
        const inputs = ["one", "two", "three"];
        const children = inputs.map(el => (0, index_1.div)(el, { "class": "child" }));
        const result = (0, index_1.div)(children, { "class": "parent" });
        expect(result).to.equal('<div class="parent"> <div class="child">one</div> <div class="child">two</div> <div class="child">three</div></div>');
    });
    it('should if given an empty argument return an empty div', () => {
        const result = (0, index_1.div)();
        expect(result).to.equal('<div></div>');
    });
});
