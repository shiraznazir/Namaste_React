import React from "react";

class UserClass extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log( this.props.name + " Child Constructor");
  }

  
  componentDidMount(){
    console.log(this.props.name + " Child Components did mount");
  }

  render() {
    
    console.log(this.props.name + " Child render");

    const { name, location } = this.props;
    const { count } = this.state;
    
    return (
      <div className="user-card">
        <h1>This is class components</h1>
        <h2
          onMouseEnter={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count: {count}
        </h2>
        <h1>{name}</h1>
        <h2>{location}</h2>
      </div>
    );
  }
}

export default UserClass;
