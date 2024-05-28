import React from "react";
import UserClass from "./UserClass";


class About extends React.Component{
  constructor(props){
    super(props);
    console.log("Parent constructor");
  };

  componentDidMount(){
    console.log("parent did mount");
  };

  render(){
    console.log("Parent render");
    return(<div>
      <h1>About Us</h1>
      <div className="about-cont">
        <UserClass name="Shubham" location="Gurugram"/>
      </div>
    </div>);
    
  };
};

export default About;
