import React from "react";

class MyStats extends React.Component {
  render() {
    <div>
      <>
        <h3>My Stats</h3>
        <button>Log Activity</button>{" "}
        {/** on click this should route to the form to input your data */}
      </>
      {/** design file has this in "workouts", but we are using weight and steps */}
      <h2>Today</h2>
      <p>
        This will have either the steps or weight or heartrate(?) depending on
        what kind of competition it is
      </p>
      <h2>Total</h2>
      <p>
        This will have either the steps or weight or heartrate(?) depending on
        what kind of competition it is
      </p>
    </div>;
  }
}

export default MyStats;
