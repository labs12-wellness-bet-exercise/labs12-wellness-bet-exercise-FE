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
    group_photo: ""
  };

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
    console.log(group);
    axios
      .post(`${ROUTES.URL}/api/groups`, group)
      .then(res => {
        console.log(res.data);
        this.setState({
          ...this.state,
          group_id: res.data.groupId
        });
      })
      .then(
        console.log(this.state.admin_id, this.state.group_id),
        axios.post(`${ROUTES.URL}/api/participants`, {
          user_id: this.state.admin_id,
          group_id: this.state.group_id
        })
      )
      .then(res => console.log(res))
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
            // startAdornment={<InputAdornment position="start">$</InputAdornment>}
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
          <Button>Create</Button>
        </form>
      </div>
    );
  }
}

export default CreateGroup;
