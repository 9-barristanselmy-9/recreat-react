import { ReactElement } from "./types";
import { updateDom } from "../dom/updateDom";
import { reconcile } from "./reconcile";

let currentRoot: ReactElement | null = null;

export function render(element: ReactElement, domNode: HTMLElement) {
    reconcile(element, domNode, currentRoot);
    currentRoot = element;
    
}

