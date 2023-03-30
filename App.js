import React from "react";
import ReactDOM from "react-dom/client";

// Now how I can put react element inside react element
// using curly braces like this: {elem}
const elem = (
  <span id="heading" className="heading">
    Namaste React span Element🚀
  </span>
);

// Now how I can put react element inside react component
// using curly braces like this: {title}
const title = (
  <h1 id="heading" className="heading">
    {/* React element inside react element */}
    {elem}
    Namaste React Title Element🚀
  </h1>
);

// React.createElement ==> ReactElement(JS Object) ==> HTMLElement (render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

console.log("heading", heading);

// JSX (transpiled before it reached to JS Engine)
//JSX ==> Babel transpiles it to React.createElement ==> ReactElement(JS Object) ==> HTMLElement (render)
const jsxHeading = (
  <h1 id="heading" className="heading">
    JSX Namaste React 🚀
  </h1>
);

console.log("jsxHeading", jsxHeading);

//optional return keyword for single statement in arrow function
// but if we write function keyword js function
// then it is compaulsory to give return keyword otherwise componnst wont be rendering to html
const TitleComponent = function () {
  return <h1>Namaste React Title Components 🚀</h1>;
};

const number = 1000;

//React Functional Components ==> is just a normal javascript function which return some jsx elements or react element
const HeadingComponent = () => {
  return (
    // React Fragment ==> behave like an empty tag
    //using div to wrape both child div is not good practice use Fragment istead of that
    <React.Fragment>
      <>
        <div id="container">
          {number}
          {/* React element inside react component */}
          {title}
          {/* Component Composition:  Rendering one component inside another Component  
      TitleComponent inside HeadingComponent
      both below are same thing 
        <TitleComponent />
        <TitleComponent ></TitleComponent>
      */}
          <TitleComponent />
          <TitleComponent></TitleComponent>

          {/* such a amzing thing I can call Titlecompmnent as beow as well as */}

          {TitleComponent()}
          <h1>Namaste React Functional Components 🚀</h1>
        </div>

        <div id="container2"></div>
      </>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);
//this is the way we render react element ===>   root.render(jsxHeading);
//below is the way to render react functional component
root.render(<HeadingComponent />);
