"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagFunctionFactory = void 0;
// TODO give up explicit type
// TODO make it chaine-able
const tagFunctionFactory = (tag) => {
    return (children, attributes) => {
        let paramString = '';
        if (attributes && !Array.isArray(attributes)) {
            paramString = ` ${attributes.name}="${attributes.value}"`;
        }
        if (attributes && Array.isArray(attributes)) {
            paramString = attributes.reduce((accumulator, currentAtt) => accumulator + ` ${currentAtt.name}="${currentAtt.value}"`, '');
        }
        return `<${tag}${paramString}>${children}</${tag}>`;
    };
};
exports.tagFunctionFactory = tagFunctionFactory;
