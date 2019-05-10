import React from "react";
import axios from "axios";

class GroupJoin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      join_code: ""
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Enter code to join a group</h1>
        <form onSubmit={this.checkJoinCode}>
          <input placeholder="join code" />
          <button type="submit">submit join code</button>
        </form>
      </div>
    );
  }
}

export default GroupJoin;
