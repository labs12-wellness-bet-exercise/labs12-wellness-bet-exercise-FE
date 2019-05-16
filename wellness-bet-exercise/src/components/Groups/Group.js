import React from "react";
import axios from "axios";
import MemberList from "./MemberList.js";
import Payment from "../Payment/paymentProof.js";

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
        <div className="one-group">
          <h3>Group View</h3>
          {/* <h6>{props.groups.group_name}</h6> */}
          {/* <h3>
                <strong>Group Name: </strong>
                {props.groupArray.group_name}
              </h3>
              <h3>
                <strong>Buy In Amount: </strong>
                {props.groupArray.buy_in_amount}
              </h3>
              <h3>
                <strong>Start Date: </strong>
                {props.groupArray.start_date}
              </h3>
              <h3>
                <strong>End Date: </strong>
                {props.groupArray.end_date}
              </h3>
              <h3>
                <strong>Join Code: </strong>
                {props.groupArray.join_code}
              </h3>
              <h3>
                <strong>Pot Total: </strong>
                {props.groupArray.pot_total}
              </h3> */}
          {this.state.group ? (
            <MemberList group={this.state.group} />
          ) : (
            <p>Loading...</p>
          )}

          <Payment />
        </div>
      </div>
    );
  }
}

export default Group;
