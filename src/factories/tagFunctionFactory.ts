import { ITagAttribute } from "../interfaces/ITagAttribute.interface"

// TODO give up explicit type
// TODO make it chaine-able
export const tagFunctionFactory = (tag: string) => {
    return (children: string, attributes?: ITagAttribute[] | ITagAttribute) => {
        let paramString = '';

        if (attributes && !Array.isArray(attributes)) {
            paramString = ` ${attributes.name}="${attributes.value}"`
        }

        if (attributes && Array.isArray(attributes)) {
            paramString = attributes.reduce((accumulator, currentAtt) => accumulator + ` ${currentAtt.name}="${currentAtt.value}"`, '');
        }

        return `<${tag}${paramString}>${children}</${tag}>`
    } 
}