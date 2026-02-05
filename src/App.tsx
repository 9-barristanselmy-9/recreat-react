// App.ts
import { createElement } from "./core/createElement";

export function App() {
  return createElement(
    "div",
    { className: "main" },
    createElement("h1", null, "Hello, World!"),
    createElement(
      "button",
      {
        onClick: () => alert("clicked"),
      },
      "Click me"
    )
  );
}
