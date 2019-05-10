import React from "react";
import axios from "axios";

class GroupJoin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      join_code: "",
      error: "",
      group_id: "",
      user_id: 1
    };
  }

  checkJoinCode = () => {
    axios
      .get(
        `https://wellness-bet.herokuapp.com/api/joincodes/${
          this.state.join_code
        }`
      )
      .then(res => {
        console.log(res.body.group_id);
        this.setState({
          group_id: res.body.group_id
        });
      })
      .catch(error => {
        console.log("there was an error", error);
        this.setState({
          error
        });
      });
  };

  addUserToGroup = () => {
    axios
      .post("https://wellness-bet.herokuapp.com/api/participants/", {
        group_id: this.state.group_id,
        user_id: this.state.user_id
      })
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));
  };

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    this.checkJoinCode();
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addUserToGroup();
  };

  render() {
    return (
      <div>
        <h1>Enter code to join a group</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="join code"
            name="join_code"
            onChange={this.handleChanges}
            value={this.state.join_code}
          />
          <button type="submit">submit join code</button>
        </form>
      </div>
    );
  }
}

export default GroupJoin;
