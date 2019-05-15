import React from "react";
import axios from "axios";
import { URL } from '../../../constants/routes.js'

class GroupJoin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      join_code: "",
      error: "",
      group_id: "",
      user_id: null
    };
  }

  checkJoinCode = () => {
    axios
      .get(
        `${URL}/api/joincodes/${
          this.state.join_code
        }`
      )
      .then(res => {
        console.log("checkJoinCode group_id", res.data[0].group_id);
        this.setState({
          group_id: res.data[0].group_id
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
    console.log("user_id", this.props.user_id, "groupid", this.state.group_id);
    axios
      .post(`${URL}/api/participants/`, {
        group_id: this.state.group_id,
        user_id: localStorage.getItem('user_id')
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
  };

  handleSubmit = e => {
    e.preventDefault();
    this.checkJoinCode();
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
