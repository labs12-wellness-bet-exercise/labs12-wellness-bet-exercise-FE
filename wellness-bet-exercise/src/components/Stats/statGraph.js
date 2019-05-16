import React from "react";
import { Bar } from "react-chartjs-2";

class StatGraph extends React.Component {
  state = {
    chartData: {
      labels: ["Lydia", "Megan", "Joe", "Patrick"],
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
      <div className="chart">
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
