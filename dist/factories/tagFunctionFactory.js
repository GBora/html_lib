"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagFunctionFactory = void 0;
const tagFunctionFactory = (tag) => {
    return (children, params) => {
        return `<${tag}>${children}</${tag}>`;
    };
};
exports.tagFunctionFactory = tagFunctionFactory;
