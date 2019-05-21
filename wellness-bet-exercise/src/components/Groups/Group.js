import React from "react";
import axios from "axios";
import MemberList from "./MemberList.js";
import Payment from "../Payment/paymentProof.js";
import "./Group.css";

class Group extends React.Component {
  state = {};

  componentDidMount() {
    axios
      .get(`https://wellness-bet.herokuapp.com${this.props.location.pathname}`)
      // .get(`http://localhost:5000${this.props.location.pathname}`)
      .then(res => {
        console.log("Group View", res.data);
        this.setState({ group: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state, "group view props");
    return (
      <div>
        <div className="group-wrapper">
          {this.state.group ? (
            <div className="group-container">
              <img src={this.state.group[0].group_photo} alt="group photo" />
              <h3>{this.state.group[0].group_name} </h3>
              <h5>
                Competition Dates: {this.state.group[0].start_date} -{" "}
                {this.state.group[0].end_date}
              </h5>
              <h5>Buy-in Amount: ${this.state.group[0].buy_in_amount}</h5>
              <h5>Current Pot Total: </h5>{" "}
              {/** need to make the calculation based on whose approved */}
              <h5>Message From Admin: {this.state.group[0].group_message}</h5>
              <MemberList
                group={this.state.group}
                pathname={this.props.location.pathname}
              />
              <Payment />
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    );
  }
}

export default Group;
