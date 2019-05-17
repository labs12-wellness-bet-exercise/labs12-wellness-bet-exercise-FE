import React from "react";
import axios from "axios";
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
    console.log("render groupview", this.state.group);
    return (
      <div>
        <div className="one-group">
          <h3>Group View</h3>
          <h6>{this.state.buy_in_amount}</h6>
          <Payment />
        </div>
      </div>
    );
  }
}

export default Group;
