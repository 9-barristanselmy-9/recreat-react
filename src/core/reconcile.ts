import { ReactElement } from "./types";
import { updateDom } from "../dom/updateDom";

export function reconcile(
  element: ReactElement,
  domNode: HTMLElement,
  oldDomNode: ReactElement | null
) {
  //function component

  if (typeof element.type === "function") {
    const child = element.type(element.props);
    reconcile(child, domNode, oldDomNode);
    element.dom = child.dom;
    return;
  }
  //text node
  if (element.type === "PLAIN_TEXT") {
    if (oldDomNode?.dom) {
      element.dom = oldDomNode.dom;
    } else {
      element.dom = document.createTextNode(element.props.nodeValue);
      
      domNode.appendChild(element.dom);
    }
    return;
  }
  //html element
  if (!oldDomNode) {
    //create
    const dom = document.createElement(element.type as string);
    updateDom(dom, {}, element.props);
    element.dom = dom;
    domNode.appendChild(element.dom);
  } else {
    //update
    element.dom = oldDomNode.dom;
    updateDom(element.dom as HTMLElement, oldDomNode.props, element.props);
  }
  //reconcile children
  const oldChildren = oldDomNode?.props.children || [];
  const newChildren = element.props.children;

  newChildren?.forEach((childElement: ReactElement, index: number) => {
    reconcile(childElement, element.dom as HTMLElement, oldChildren[index]);
  });
}
