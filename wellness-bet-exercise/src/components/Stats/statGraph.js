import React from "react";
import { Bar } from "react-chartjs-2";
import "./stats.css";

class StatGraph extends React.Component {
  state = {
    chartData: {
      labels: ["Jane Fonda", "Richard Simmons", "Jack LaLanne", "Jack LaLanne"],
      datasets: [
        {
          label: "Steps",
          data: [2000, 15000, 2200, 167],
          backgroundColor: "rgba(77, 5, 232, 1)"
        }
      ]
    }
  };

  render() {
    return (
      <div className="bar-chart">
        <Bar
          data={this.state.chartData}
          options={{
            maintainAspectRatio: true,
            title: {
              display: true,
              text: "Competition Steps"
            }
          }}
        />
      </div>
    );
  }
}

export default StatGraph;
