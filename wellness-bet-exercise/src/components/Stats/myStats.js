import React from "react";
import Button from "@material-ui/core/Button";

class MyStats extends React.Component {
  render() {
    return (
      <div>
        <>
          <h3>My Stats</h3>
          <Button>Log Activity</Button>
          {/** on click this should route to the form to input your data */}
        </>
        {/** design file has this in "workouts", but we are using weight and steps */}
        <h2>Today</h2>
      </div>
    );
  }
}

export default MyStats;
