import React from "react";
import { Doughnut } from "react-chartjs-2";

class TimeLeft extends React.Component {
  state = {
    chartData: {
      labels: ["Time Remaining", "Time Spent"],
      datasets: [
        {
          label: "Steps",
          data: [16, 22],
          backgroundColor: ["rgba(77, 5, 232, 1)", "rgb(186,85,211)"]
        }
      ]
    }
  };

  render() {
    return (
      <div className="chart">
        <Doughnut
          data={this.state.chartData}
          options={{
            maintainAspectRatio: true,
            title: {
              display: true,
              text: "Time Remaining"
            }
          }}
        />
      </div>
    );
  }
}

export default TimeLeft;
