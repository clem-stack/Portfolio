import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import favicon from "./assets/project-previews/favicon.ico";

const setFavicon = (href) => {
  let link = document.querySelector("link[rel*='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.href = href;
};

setFavicon(favicon);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
