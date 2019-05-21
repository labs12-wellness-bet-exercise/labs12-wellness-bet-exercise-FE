import React from "react";
import axios from "axios";
import * as ROUTES from "../../../constants/routes.js";

class GroupPhoto extends React.Component {
  state = {
    group_photo:
      "https://kurbo.com/wp-content/uploads/2017/01/pilates-exercise.jpg",
    group_id: null
  };
  componentDidMount(){
    this.setState({
      group_name: this.props.group_name,
      buy_in_amount: Number(this.props.buy_in_amount),
      start_date: this.props.start_date,
      end_date: this.props.end_date,
      group_message: this.props.group_message,
      admin_id: this.props.routerProps.user_id,
      join_code: (new Date() % 9e6).toString(36)
    })
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
      admin_id: this.state.admin_id,
      join_code: (new Date() % 9e6).toString(36)
    };
    console.log(group);
    axios
      .post(`${ROUTES.URL}/api/groups`, group)
      .then(res => {
        console.log(res.data)
        this.setState({
          ...this.state,
          group_id: res.data.groupId
        })
      })
      .then(
          console.log(this.state.admin_id, this.state.group_id),
          axios
             .post(`${ROUTES.URL}/api/participants`, {
               user_id: this.state.admin_id,
               group_id: this.state.group_id
      }))
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
    //   .then(res => {
    //     alert(res);
    //     return this.joinGroup()
    //   })
    //     let id = res.data.groupId.id;
    //     res.status(201).json(res.data)
    //     .then(
    //       this.joinGroup(this.props.routerProps.user_id, id)
    //       )
    //     .catch(
    //       console.log('error joining created group')
    //     )
    //   })
      
    //   .catch(error => {
    //     console.log("Error creating that group...", error);
    //   });
    // };
    // this.props.routerProps.history.push(`/api/groups/${id}`);
    
    joinGroup = (user_id, group_id) => {
      axios
      .post(`${ROUTES.URL}/api/participants/`, { user_id: user_id, group_id: group_id })
      .then(res => {
        res.status(201)
           .json({
             res,
             message: "group created and joined successfully"
             })
        });
    };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="imageUploader">
        <h3>Group Message</h3>
        <p>{this.props.group_message}</p>
        <img src={this.state.group_photo} alt="avatar" />
        <label>Image link for your group photo</label>
        <input
          className="linkSpace"
          name="group_photo"
          onChange={this.handleChange}
          value={this.state.group_photo}
          type="link"
          placeholder="image link"
        />
        <button onClick={this.props.messageAddedToggle}>Back</button>
        {this.state.group_photo.length > 0 ? (
          <button onClick={this.submitGroup}>Submit</button>
        ) : (
          <button className="fadedNext">Next</button>
        )}
      </div>
    );
  }
}
export default GroupPhoto;
