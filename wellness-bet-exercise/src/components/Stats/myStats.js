import React from "react";
import Button from "@material-ui/core/Button";
import StepsForm from "./StepsForm";

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
    console.log("steps", this.props);
    return (
      <div>
        <>
          {this.props ? <h6>#of steps placeholder</h6> : <h3>0</h3>}

          {!this.state.renderToggle ? (
            <Button onClick={() => this.renderForm()}>Log Activity</Button>
          ) : (
            <StepsForm renderForm={() => this.renderForm()} />
          )}
        </>
      </div>
    );
  }
}

export default MyStats;
