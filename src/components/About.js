

import { Component } from "react";
import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./userClass";

import UserClassBasicConcept from "./UserClassBasicConcept";

// Commneting functional component and converting it to class based component
// ==============================================================================
//Parent component for UserClass component
// const About = () => {
//   return (
//   <div>
//     <h1>About</h1> 
//     <h3>This is about us page</h3> 

//     {/* pass props to User Component */}
//     {/* <User name={"Kalyani Gupta (Funtion component)"}/> */}


//     {/* pass props to User Component */}
//     <UserClass name={"Kalyani Gupta (Class component)"} location={"Pune (class component)"}/>
//   </div>
// )};


 class About extends Component {

  constructor(){
    super()
    console.log("Parent Constructor")
  }

  componentDidMount(){
    console.log("parent component in componentDidMount")
  }

  render (){
    console.log("Parent Render")
    return (
      <div>
        <h1>About</h1> 
        <h3>This is about us page</h3> 
        <div>
          LoggedIn User 
          {/* Access context in class based component */}
          <UserContext.Consumer>
            {/* inside this there will be callback function which will have the access to userContext data */} 
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
       </div>
        {/* pass props to UserClassBasicConcept Component */}
        {/* <UserClassBasicConcept name={"First (Class component)"} location={"Pune (class component)"}/>
        <UserClassBasicConcept name={"Second (Class component)"} location={"Deharadun (class component)"}/> */}
        <UserClass/>
        {/* Below funtional component is declare and correct for checking useEffect behaviour with setTimeInterval */}
        {/* <User/> */}
      </div>
    )
  };
}
export default About;