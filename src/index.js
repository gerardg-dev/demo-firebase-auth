import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";

// https://scotch.io/@micwanyoike/how-to-add-fonts-to-a-react-project
WebFont.load({
  google: {
    families: [
      "Montserrat:400",
      "Work Sans:300,400",
      "Orbitron:400,500,600,700,800,900",
      "sans-serif",
      "Bangers",
      "cursive"
    ]
  }
});

const rootEl = document.getElementById("app-site");

let render = () => {
  const MainApp = require("./MainApp").default;
  ReactDOM.render(<MainApp />, rootEl);
};

if (module.hot) {
  module.hot.accept("./MainApp", () => {
    const MainApp = require("./MainApp").default;
    render(<MainApp />, rootEl);
  });
}

render();
