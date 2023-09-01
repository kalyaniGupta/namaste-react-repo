// getting data from About component below is correct way
// const User = (props) => {
//   return (
//   <div className="user-card">
//     <h1>Name: {props.name}</h1> 
//     <h3>Location: Pune</h3>
//     <h4>Contact: kalyanigupta13 </h4> 
//   </div>
// )};
// export default User;


import { useState, useEffect } from "react";
// getting data from About component but destruture on the fly
const User = ({name}) => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(2)

  useEffect(()=>{
    console.log("UseEffect");
    const timer = setInterval(()=>{
        console.log("setInterval ")
      }, 1000)
    
      // this function will call when will leave this page or cleick on other tab
      return()=>{
        clearInterval(timer)
        console.log("useEffect return");
      }
    }, [])

  console.log("Render");
  return (
  <div className="user-card">
    <h1>Functional Component</h1>
    <h1>Count = {count}</h1>
    <h1>Count2 = {count2}</h1>
    <h2>Name: {name}</h2> 
    <h3>Location: Pune</h3>
    <h4>Contact: kalyanigupta13 </h4> 
  </div>
)};

export default User;