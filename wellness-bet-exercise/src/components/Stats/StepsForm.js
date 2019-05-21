import React from "react";
import Button from "@material-ui/core/Button";
import "./stats.css";

class StepForm extends React.Component {
  render() {
    return (
      <div>
        <h3>How many steps did you take today?</h3>
        <input placeholder="steps taken" type="integer" />
        <Button onClick={() => this.props.renderForm()}>Submit</Button>
      </div>
    );
  }
}

export default StepForm;
