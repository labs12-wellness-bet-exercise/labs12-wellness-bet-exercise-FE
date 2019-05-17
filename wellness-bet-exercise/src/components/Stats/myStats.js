import React from "react";
import Button from "@material-ui/core/Button";
import StepsForm from "./StepsForm";
import "./stats.css";

class MyStats extends React.Component {
  state = {
    renderToggle: false
  };
  renderForm = () => {
    return this.setState({
      renderToggle: !this.state.renderToggle
    });
  };

  render() {
    return (
      <div className="stats-components-titles">
        <>
          <h3>My Stats</h3>
          {this.state.renderToggle ? (
            <Button onClick={this.renderForm()}>Log Activity</Button>
          ) : (
            <StepsForm renderForm={() => this.renderForm} />
          )}
        </>

        <h2>Today</h2>
      </div>
    );
  }
}

export default MyStats;
