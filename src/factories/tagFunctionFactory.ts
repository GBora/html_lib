export const tagFunctionFactory = (tag: string) => {
    return (children: string, params: any[]) => {
        return `<${tag}>${children}</${tag}>`
    } 
}