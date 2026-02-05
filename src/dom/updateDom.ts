type Props = {
  [key: string]: any;
};

const isEvent = (key: string) => {
  return key.startsWith("on");
};
const isAttribute = (key: string) => {
  return !isEvent(key) && key != "children";
};

export function updateDom(
  domNode: HTMLElement,
  prevProps: Props,
  nextProps: Props
) {
  if (!(domNode instanceof HTMLElement)) return;

  //set attributes
  Object.keys(nextProps).forEach((name) => {
    if (name === "children") {
      domNode.setAttribute("class", nextProps[name]);
    } else {
      (domNode as any)[name] = nextProps[name];
    }
  });

  // add event listeners
  Object.keys(nextProps)
    .filter(isEvent)
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      domNode.addEventListener(eventType, nextProps[name]);
    });
}
