import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement returns an object and root.render


const heading = React.createElement(
  "h2",
  { id: "heading" },
  "Namaste React 🚀"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
