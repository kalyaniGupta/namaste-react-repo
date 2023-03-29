import React from "react";
import ReactDOM from "react-dom/client"

// simple react code for rendering h1 tag inside div tag
const heading = React.createElement("h1", {
    id: "heading", xyz: "abc"
}, "Hello world from Namaste React"); // react.development.js
const root = ReactDOM.createRoot(document.getElementById("root")); // react-dom.development.js
root.render(heading);


/* Nested Element creation example
    <div id="parent">
        <div id="child1">
            <h1> I am  a h1 tag</h1>
            <h2>I am a h2 tag</h2>
        </div>
    </div>
*/

const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, React.createElement("h1", {
    id: "heading"
}, "Hello world from Namaste React parent->child->h1 tag"))); // react.development.js
const root1 = ReactDOM.createRoot(document.getElementById("root1")); // react-dom.development.js
root1.render(parent);

/* nested nested Sibling creation example array of children 
    <div id="parent">
        <div id="child1">
            <h1> I am  a h1 tag</h1>
            <h2>I am a h2 tag</h2>
        </div>
    </div>
*/

const parent2 = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
},  [ //Array of children
        React.createElement("h1", {id: "heading"}, "1st sibling"), 
        React.createElement("h1", {id: "heading"}, "2nd sibling")
    ]
    )); // react.development.js
const root2 = ReactDOM.createRoot(document.getElementById("root2")); // react-dom.development.js
root2.render(parent2);


/* nested child Sibling creation example array of children 
    <div id="parent">
        <div id="child1">
            <h1> I am  a h1 tag</h1>
            <h2>I am a h2 tag</h2>
        </div>

        <div id="child2">
            <h1> I am  a h1 tag</h1>
            <h2>I am a h2 tag</h2>
        </div>
    </div>
*/


const parent3 = React.createElement("div", {id: "parent"}, 
    [
        React.createElement("div", { id: "child"}, 
            [ //Array of children
                React.createElement("h1", { id: "heading" }, "1st sibling"),
                React.createElement("h1", { id: "heading" }, "2nd sibling")
            ]
        ), React.createElement("div", { id: "child2" }, 
            [ //Array of children
                React.createElement("h1", { id: "heading" }, "1st sibling"),
                React.createElement("h1", { id: "heading" }, "2nd sibling")
            ]
        )
   ]
); // react.development.js
const root3 = ReactDOM.createRoot(document.getElementById("root3")); // react-dom.development.js
root2.render(parent3);