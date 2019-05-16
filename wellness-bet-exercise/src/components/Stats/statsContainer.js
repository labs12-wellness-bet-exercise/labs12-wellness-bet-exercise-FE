import React from "react";
import TimeLeft from "./timeleft";
import MyStats from "./myStats";
import StatGraph from "./statGraph";
import Leaderboard from "./Leaderboard";
import "./stats.css";

const StatsContainer = () => {
  return (
    <div className="stats-container">
      <div className="stats-title">
        <div className="flex-title-info">
          <h4>GROUP NAME GOES HERE</h4>
          <h6>Competition ends: END DATE HERE </h6>
        </div>
        <div>
          <h5>Total Pot: $ Pot Amount here</h5>
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
};

export default StatsContainer;
