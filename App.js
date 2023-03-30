import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement ==> ReactElement(JS Object) ==> HTMLElement (render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

console.log("heading", heading);


// JSX (transpiled before it reached to JS Engine)
//JSX ==> Babel transpiles it to React.createElement ==> ReactElement(JS Object) ==> HTMLElement (render)
const jsxHeading = <h1 id="heading" className="heading">JSX Namaste React 🚀</h1>;

console.log("jsxHeading", jsxHeading);

//React Functional Components ==> is just a normal javascript function which return some jsx elements or react element 
const HeadingComponent = () =>{
  return <h1>Namaste React Functional Components 🚀</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading); 
//this is the way we render react element
root.render(jsxHeading);

//this is the way we render react functional component
root.render(<HeadingComponent />);
