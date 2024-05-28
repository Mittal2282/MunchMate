import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
    };
    console.log("child constructor");
  }
  componentDidMount(){
    console.log("child did mount");
  };
  render() {
    console.log("child render");
    const { name, location } = this.props;
    const { count1 } = this.state;
    return (
      <div className="user-card">
        <h2>Count1:{count1}</h2>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h2>Name:{name}</h2>
        <h2>Location: {location} (from Class)</h2>
        <h2>Contact: 9905126321</h2>
      </div>
    );
  }
}

export default UserClass;
