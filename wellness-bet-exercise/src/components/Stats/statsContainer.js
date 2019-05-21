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

  componentDidMount() {
    axios
      .get(`${ROUTES.URL}/api/steps/1`)
      .then(res => {
        this.setState({ steps: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log("stats state", this.state.groups);
    console.log("stats props", this.props);
    return (
      <div className="stats-container">
        <div className="stats-title">
          <div className="flex-title-info">
            <h4>{this.state.group}</h4>
            <h6>Competition ends: {this.props.state.groups[0].end_date} </h6>
          </div>
          <div>
            <h5>Total Pot: {this.props.state.groups[0].buy_in_amount}</h5>
          </div>
        </div>

        <div className="flex-stat-items">
          <Leaderboard className="stat-item" />
          <TimeLeft
            className="stat-item"
            end_date={this.props.state.groups[0].end_date}
            start_date={this.props.state.groups[0].start_date}
          />
          <MyStats className="stat-item" steps={this.state.steps} />
        </div>
        <StatGraph />
      </div>
    );
  }
}

export default StatsContainer;
