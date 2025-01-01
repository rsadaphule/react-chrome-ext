import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return <p>Hello World!</p>;
};

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);
const root = createRoot(rootElement);

root.render(<App />);
