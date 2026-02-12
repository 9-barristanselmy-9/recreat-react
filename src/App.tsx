// App.ts
import { createElement } from "./core/createElement";
import { useState } from "./hooks/useState";

export function App() {
  const [count, setCount] = useState(0);
  return createElement(
    "div",
    { className: "main" },
    createElement("h1", null, "Hello, World!"),
    createElement("h2", {}, "Count: ", count),
    createElement(
      "button",
      {
        onClick: () => setCount(count + 1),
      },
      "increment",
    ),
  );
}
