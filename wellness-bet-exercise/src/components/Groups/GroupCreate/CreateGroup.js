import React from "react";
import "./createGroup.css";
import * as ROUTES from "../../../constants/routes";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import InputAdornment from "@material-ui/core/InputAdornment";


class CreateGroup extends React.Component {
  state = {
    group_name: "",
    start_date: "",
    end_date: "",
    buy_in_amount: null,
    group_message: "",

    group_photo:
      "https://greatist.com/sites/default/files/best-time-feature.jpg",
    //trying to add a couple mor fields below
    admin_id: null,
    join_code: "",
    group_id: null
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      admin_id: this.props.user_id,
      join_code: (new Date() % 9e6).toString(36)
    });
  }

  submitGroup = e => {
    e.preventDefault();
    let group = {
      group_name: this.state.group_name,
      buy_in_amount: Number(this.state.buy_in_amount),
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      group_message: this.state.group_message,
      group_photo: this.state.group_photo,
      admin_id: this.props.user_id,
      join_code: (new Date() % 9e6).toString(36)
    };
    
    console.log('~~~~~~~~~~~~~~~~~~~~', this.props);
    console.log(group);
    console.log("create group state", this.state);
    console.log("user id from props", this.props.user_id);
    axios
      .post(`${ROUTES.URL}/api/groups`, group)
      .then(res => {
        this.setState({ group_id: res.data.group_id });
        console.log("post to groups response", res.data);
        console.log(
          "admin and group",
          this.state.admin_id,
          res.data.group_id,
          this.state
        );
      })
      .then(res => {
        axios.post(`${ROUTES.URL}/api/participants`, {
          user_id: this.props.user_id,
          group_id: this.state.group_id
        });
      })
      //.then(res => console.log("create group consolelog", res))
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="groupFormContainer">
        <h1>New Group</h1>
        <form onSubmit={this.submitGroup}>
          <TextField
            label="Group Name"
            type="text"
            name="group_name"
            value={this.state.group_name}
            margin="normal"
            variant="outlined"
            placeholder="Enter Group Name"
            onChange={this.handleChange}
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            label="Competition start date"
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            id="date"
            type="date"
            name="start_date"
            value={this.state.start_date}
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            margin="normal"
            variant="outlined"
            label="Competition End Date"
            onChange={this.handleChange}
            id="date"
            type="date"
            name="end_date"
            value={this.state.end_date}
          />
          <TextField
            margin="normal"
            variant="outlined"
            label="Buy in Amount"
            type="number"
            name="buy_in_amount"
            value={this.state.buy_in_amount}
            placeholder="Enter buy-in amount..."
            onChange={this.handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              )
            }}
          />

          <TextField
            margin="normal"
            variant="outlined"
            label="Image link for your group photo"
            className="linkSpace"
            name="group_photo"
            onChange={this.handleChange}
            value={this.state.group_photo}
            type="link"
            placeholder="image link"
          />
          <TextField
            type="text"
            name="group_message"
            id="outlined-textarea"
            label="Group Message"
            placeholder="Post a greeting to your group!"
            multiline
            margin="normal"
            variant="outlined"
            value={this.state.group_message}
            onChange={this.handleChange}
          />

          <Button onClick={this.submitGroup}>Submit</Button>

        </form>
      </div>
    );
  }
}

export default CreateGroup;
