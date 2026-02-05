import { ReactElement } from "./types";


type Child = ReactElement | string | number;
export function createElement(
    type:string | Function,
    props:{[key:string]: any},
        ...children: Child[]

): ReactElement {
    
    const flatchildren = children.flat();
    const element = {
        type,
        props: {
            ...props,
            children: flatchildren.flatMap((child)=>
            typeof child ==="string" || typeof child ==="number" ?
            createTextElement(String(child)) : child)
        }
    }
    return element;
}

function createTextElement(text:string):ReactElement {
    return {
        type: "PLAIN_TEXT",
        props: {
            nodeValue: text,
            children: []
        }
    }
}