import React from "react";
import axios from "axios";
import * as ROUTES from "../../constants/routes";

import TimeLeft from "./timeleft";
import MyStats from "./myStats";
import StatGraph from "./statGraph";
import Leaderboard from "./Leaderboard";
import "./stats.css";

class StatsContainer extends React.Component {
  state = {};

  // componentDidMount() {
  //   axios
  //     .get(`${ROUTES.URL}/api/groups/1`)
  //     .then(res => {
  //       this.setState({ groups: res.data });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  render() {
    console.log("stats state", this.state.groups);
    console.log("stats props", this.props.state.groups[0]);
    return (
      <div className="stats-container">
        <div className="stats-title">
          <div className="flex-title-info">
            <h4>{this.state.group}</h4>
            <h6>Competition ends: END DATE HERE </h6>
          </div>
          <div>
            <h5>Total Pot: {this.props.state.groups[0].buy_in_amount}</h5>
          </div>
        </div>

        <div className="flex-stat-items">
          <Leaderboard className="stat-item" />
          <TimeLeft className="stat-item" />
          <MyStats className="stat-item" />
        </div>
        <StatGraph />
      </div>
    );
  }
}

export default StatsContainer;
