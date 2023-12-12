"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagFunctionFactory = void 0;
// TODO make the functions chain-able
const tagFunctionFactory = (tag, selfClosing) => {
    return (children, attributes) => {
        let childrenToRender = '';
        if (Array.isArray(children)) {
            childrenToRender = children.reduce((accumulator, element) => accumulator + ' ' + element, '');
        }
        else {
            if (children) {
                childrenToRender = children;
            }
            else {
                // Empty argument should just generate an empty element
                childrenToRender = '';
            }
        }
        let paramString = '';
        if (attributes) {
            const keys = Object.keys(attributes);
            if (keys.length === 1) {
                let key = keys[0];
                paramString = ` ${key}="${attributes[key]}"`;
            }
            if (keys.length > 1) {
                paramString = keys.reduce((accumulator, key) => accumulator + ` ${key}="${attributes[key]}"`, '');
            }
        }
        if (selfClosing && selfClosing === true) {
            return `<${tag}${paramString} ${childrenToRender} />`;
        }
        return `<${tag}${paramString}>${childrenToRender}</${tag}>`;
    };
};
exports.tagFunctionFactory = tagFunctionFactory;
