import React from 'react';

class UserClassBasicConcept extends  React.Component {
  constructor(props){
    super(props)
   console.log(this.props.name+ " Child Constructor")
    //create many state variable inside one single object
    this.state = {
      count: 0,
      count2: 2,
    }
  }

  componentDidMount(){
    console.log(this.props.name+ " child component in componentDidMount")
  }

  render (){
    console.log(this.props.name+ " Child Render")
    //destructuring
    const {name, location } = this.props;
    const {count, count2 } = this.state;
     
    return (
      <div className="user-card">
        <h1>Class Based Component</h1>
        {/* before destructuring */}
        {/* 
          <h3>Count: {this.state.count}</h3>
          <h2>Name: {this.props.name}</h2> 
          <h3>Location: {this.props.location}</h3> 
        */}

        {/* After Destructuring */}
        <h3>Count: {count}</h3>
       
        {/* create a button to increase the count value */}
        {/*  this.state.count = this.state.count +1 this is the wrong way to increase the count value */}
        <button onClick={()=>{
          this.setState({
            count:this.state.count + 1
          })
        }}>
          Increase Count 
        </button>
        <h2>Name: {name}</h2> 
        <h3>Location: {location}</h3>
        <h4>Contact: kalyanigupta13 </h4> 
        <h3>Count2: {count2}</h3>
      </div>
    )
  };
}

export default UserClassBasicConcept;
