import React from "react";
import "./createGroup.css";
import * as ROUTES from "../../../constants/routes";
import axios from "axios";

class CreateGroup extends React.Component {
  state = {
    group_name: "",
    start_date: "",
    end_date: "",
    buy_in_amount: null,
    group_message: "",
    group_photo:
      "https://kurbo.com/wp-content/uploads/2017/01/pilates-exercise.jpg",
    //trying to add a couple mor fields below
    admin_id: null,
    join_code: ""
  };

  // componentDidUpdate(prevProps, prevState) {
  //   prevProps !== this.props && prevState !== this.state
  //     ? this.setState({
  //         admin_id: this.props.user_id,
  //         join_code: (new Date() % 9e6).toString(36)
  //       })
  //     : console.log("sorry about your luck");
  // }

  componentDidMount() {
    this.setState({
      ...this.state,
      admin_id: this.props.user_id,
      join_code: (new Date() % 9e6).toString(36)
    });
  }

  // getUserId = () => {
  //   return this.props.user_id;
  // };

  //This is a test of submit group. this is not expected to work. comment this part out if it breaks.

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
    console.log("create group state", this.state);
    console.log("user id from props", this.props.user_id);
    axios
      .post(`${ROUTES.URL}/api/groups`, group)
      .then(res => {
        console.log("post to groups response", res.data);
        console.log(
          "admin and group",
          this.state.admin_id,
          this.state.group_id,
          this.state
        );
        // this.setState({
        //   ...this.state,
        //   //group_id: res.data.groupId,
        //   admin_id: this.props.user_id,
        //   join_code: (new Date() % 9e6).toString(36)
        // });
      })
      .then(
        res => {
          axios.post(`${ROUTES.URL}/api/participants`, {
            user_id: this.props.user_id,
            group_id: this.state.group_id.id
          });
        }
        // axios.post(`${ROUTES.URL}/api/participants`, {
        //   user_id: this.props.user_id,
        //   group_id: this.state.group_id
        // })
      )
      //.then(res => console.log("create group consolelog", res))
      .catch(err => console.log(err));
  };

  //To right here

  //original submit group function. commented it out to test and change things right below this
  // submitGroup = e => {
  //   e.preventDefault();
  //   let group = {
  //     group_name: this.state.group_name,
  //     buy_in_amount: Number(this.state.buy_in_amount),
  //     start_date: this.state.start_date,
  //     end_date: this.state.end_date,
  //     group_message: this.state.group_message,
  //     group_photo: this.state.group_photo,
  //     admin_id: this.props.user_id,
  //     join_code: (new Date() % 9e6).toString(36)
  //   };
  //   console.log(group);
  //   axios
  //     .post(`${ROUTES.URL}/api/groups`, group)
  //     .then(res => {
  //       console.log(res.data);
  //       this.setState({
  //         ...this.state,
  //         group_id: res.data.groupId
  //       });
  //     })
  //     .then(
  //       console.log(
  //         "admin and group",
  //         this.state.admin_id,
  //         this.state.group_id
  //       ),
  //       axios.post(`${ROUTES.URL}/api/participants`, {
  //         user_id: this.state.admin_id,
  //         group_id: this.state.group_id
  //       })
  //     )
  //     .then(res => console.log("create group consolelog", res))
  //     .catch(err => console.log(err));
  // };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="groupFormContainer">
        <form onSubmit={this.submitGroup}>
          <input
            type="text"
            name="group_name"
            value={this.state.group_name}
            placeholder="Enter Group Name"
            onChange={this.handleChange}
          />
          <label>Competition start date</label>
          <input
            onChange={this.handleChange}
            type="date"
            name="start_date"
            value={this.state.start_date}
          />
          <label>Competition end date</label>
          <input
            onChange={this.handleChange}
            type="date"
            name="end_date"
            value={this.state.end_date}
          />
          <label>Buy-in amount</label>
          <input
            type="number"
            name="buy_in_amount"
            value={this.state.buy_in_amount}
            placeholder="Enter buy-in amount..."
            onChange={this.handleChange}
          />
          <label>Image link for your group photo</label>
          <input
            className="linkSpace"
            name="group_photo"
            onChange={this.handleChange}
            value={this.state.group_photo}
            type="link"
            placeholder="image link"
          />
          <textarea
            type="text"
            name="group_message"
            value={this.state.group_message}
            placeholder="Post a greeting for your group!"
            onChange={this.handleChange}
          />
          <button onClick={this.submitGroup}>Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateGroup;
