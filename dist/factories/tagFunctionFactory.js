"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagFunctionFactory = void 0;
// TODO give up explicit type
// TODO make it chaine-able
const tagFunctionFactory = (tag) => {
    return (children, attributes) => {
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
            // if (attributes && !Array.isArray(attributes)) {
            //     paramString = ` ${attributes.name}="${attributes.value}"`
            // }
            // if (attributes && Array.isArray(attributes)) {
            //     paramString = attributes.reduce((accumulator, currentAtt) => accumulator + ` ${currentAtt.name}="${currentAtt.value}"`, '');
            // }
        }
        return `<${tag}${paramString}>${children}</${tag}>`;
    };
};
exports.tagFunctionFactory = tagFunctionFactory;
