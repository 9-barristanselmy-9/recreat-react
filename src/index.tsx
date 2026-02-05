import { createElement } from "./core/createElement";
import { render } from "./core/render";
import { App } from "./App";
import "./index.css";

const first = createElement(
  "div",
  { className: "app" },
  "Hello"
);

const second = createElement(
  "div",
  { className: "app" },
  "Hello again"
);

const root = document.getElementById("root");


render(createElement(App, null), root);
