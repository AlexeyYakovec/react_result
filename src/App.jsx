import React from "react";
import "./App.css";

function App() {
  const currentYear = new Date().getFullYear();

  return React.createElement(
    "div",
    { className: "App" },
    React.createElement(
      "header",
      { className: "App-header" },
      React.createElement("h1", null, "Vite + React"),
      React.createElement(
        "p",
        null,
        "Edit ",
        React.createElement("code", null, "src/App.jsx"),
        " and save to test HMR."
      ),
      React.createElement(
        "a",
        {
          className: "App-link",
          href: "https://reactjs.org",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        "Learn React"
      ),
      React.createElement("p", null, "© ", currentYear)
    )
  );
}

export default App;
