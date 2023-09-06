import React from 'react';

class UserClass extends  React.Component {
  constructor(props){
    super(props)
   
    //create many state variable inside one single object
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log("child constructor")
  }

  async componentDidMount(){
    // git hub user general api : https://api.github.com/users/USERNAME
    const data = await fetch ("https://api.github.com/users/kalyaniGupta");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log("github user data", json)
    console.log("child component did mount")
  }

  componentDidUpdate(){
    console.log("child component did update")
  }

  render (){
    console.log("child render")
    const { name, location, bio, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Bio: {bio}</h3>
        <h4>Contact: @akalyanigupta</h4>
      </div>
    );
  };
}

export default UserClass;
