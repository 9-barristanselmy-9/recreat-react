import { ReactElement } from "./types";
import { reconcile } from "./reconcile";
import { resetHooks, setRerenderCallback } from "../hooks/useState";

let currentRoot: ReactElement | null = null;
export function render(element: ReactElement, domNode: HTMLElement) {
  //full wipe the dom TODO: optimize this by only removing the old root

  resetHooks();
  setRerenderCallback(() => {
    resetHooks();
    render(element, domNode);
  });
  reconcile(element, domNode, currentRoot);
  currentRoot = element;
}
