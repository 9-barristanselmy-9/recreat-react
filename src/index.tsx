import { createElement } from "./core/createElement";
import { render } from "./core/render";
import { App } from "./App";
import "./index.css";



const root = document.getElementById("root");


render(createElement(App, null), root);
