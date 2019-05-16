import React from "react";
import TimeLeft from "./timeleft";
//import MyStats from "./myStats";
import StatGraph from "./statGraph";

const StatsContainer = () => {
  return (
    <div>
      <h2>Stats Container</h2>
      <div>
        <h1>GROUP NAME GOES HERE</h1>
        <p>Competition ends: END DATE HERE </p>

        <h1>Total Pot: $ INSERT TOTAL POT AMOUNT HERE</h1>
      </div>
      <div>
        <div className="leaderboard"> Hi I'm the leaderboard.</div>
        <TimeLeft />
        {/* <MyStats /> */}
      </div>
      <StatGraph />
    </div>
  );
};

export default StatsContainer;
