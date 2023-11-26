// TODO make the functions chain-able
export const tagFunctionFactory = (tag: string) => {
    return (children?: string | string [], attributes?: {
        [key: string]: string
    }) => {
        let childrenToRender = ''
        if (Array.isArray(children)) {
            childrenToRender = children.reduce((accumulator, element) => accumulator + ' ' + element, '')
        } else {
            if (children) {
                childrenToRender = children
            } else {
                // Empty argument should just generate an empty element
                childrenToRender = ''
            }
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
        }

        return `<${tag}${paramString}>${childrenToRender}</${tag}>`
    } 
}