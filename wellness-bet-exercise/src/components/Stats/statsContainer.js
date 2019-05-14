import React from "React";
import TimeLeft from "./timeleft";

const StatsContainer = () => {
  return (
    <div>
      <div>
        <h1>GROUP NAME GOES HERE</h1>
        <p>Competition ends: END DATE HERE </p>
        <img alt="group-photo" src="" />
        <h1>Total Pot: $ INSERT TOTAL POT AMOUNT HERE</h1>
      </div>
      <div>
        <div className="leaderboard"> Hi I'm the leaderboard.</div>
        <TimeLeft />
        <MyStats />
      </div>
      <StatGraph />
    </div>
  );
};

export default StatsContainer;
