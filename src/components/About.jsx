import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount(){
    console.log("Parent Components did mount");
  }
  
  render() {
    console.log("Parent render");
    return (
      <div className="about-page">
        <h1>This is About Section of the Page</h1>
        <UserClass name="First Class" location="Mumbai" />
        <UserClass name="Second Class" location="Hyderabad" />
        <UserClass name="Third Class" location="Delhi" />
      </div>
    );
  }
}

export default About;
