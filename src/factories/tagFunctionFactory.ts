import { ITagAttribute } from "../interfaces/ITagAttribute.interface"

// TODO give up explicit type
// TODO make it chaine-able
export const tagFunctionFactory = (tag: string) => {
    return (children: string | string [], attributes?: ITagAttribute) => {
        let childrenToRender = ''
        if (Array.isArray(children)) {
            childrenToRender = children.reduce((accumulator, element) => accumulator + ' ' + element, '')
        } else {
            childrenToRender = children
        }

        let paramString = '';
        
        if (attributes) {
            const keys = Object.keys(attributes);
            if (keys.length === 1) {
                let key = keys[0];
                paramString = ` ${key}="${attributes[key]}"`
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

        return `<${tag}${paramString}>${childrenToRender}</${tag}>`
    } 
}