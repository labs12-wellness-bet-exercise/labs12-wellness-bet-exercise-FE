import React from "react";
import axios from "axios";
import { URL } from "../../../constants/routes.js";
import "./GroupJoin.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


class GroupJoin extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      join_code: "",
      error: "",
      group_id: "",
      user_id: ""
    };
  }

  checkJoinCode = () => {
    axios
      .get(`${URL}/api/joincodes/${this.state.join_code}`)
      .then(res => {
        console.log("checkJoinCode group_id", res.data[0].group_id);
        this.setState({
          group_id: res.data[0].group_id,
          user_id: this.props.user_id
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
      .post(`${URL}/api/participants/`, {
        group_id: this.state.group_id,
        user_id: this.state.user_id
      })
      .then(res => {
        console.log("group join add user to group", res);
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
    console.log('~~~~~~~~~~~~~~~', this.props)
    console.log("state groupjoin", this.state);
    return (
      <div className="GroupJoin">
        <h1>Join By Code</h1>
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="Secret Group Code"
            placeholder="Join Code"
            name="join_code"
            margin="normal"
            variant="outlined"
            onChange={this.handleChanges}
            value={this.state.join_code}
          />
          <Button type="submit">Join Group</Button>
        </form>
      </div>
    );
  }
}

export default GroupJoin;
