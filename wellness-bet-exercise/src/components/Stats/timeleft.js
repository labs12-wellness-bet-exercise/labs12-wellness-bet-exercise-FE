import React from "react";
import { Doughnut } from "react-chartjs-2";

const getTimeLeft = endtime => {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return Math.abs(days);
};

const getTimeSpent = starttime => {
  var t = Date.parse(new Date() - Date.parse(starttime));
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return Math.abs(days);
};

// class TimeLeft extends React.Component {
//   state = {
//     chartData: {
//       labels: ["Days Remaining", "Days Spent"],
//       datasets: [
//         {
//           label: "Steps",
//           data: [8, 22],
//           backgroundColor: ["rgba(77, 5, 232, 1)", "rgb(186,85,211)"]
//         }
//       ]
//     }
//   };

class TimeLeft extends React.Component {
  state = {
    chartData: {
      labels: ["Days Remaining", "Days Spent"],
      datasets: [
        {
          label: "Steps",
          data: [
            getTimeLeft(this.props.end_date),
            getTimeSpent(this.props.start_date)
          ],
          backgroundColor: ["rgba(77, 5, 232, 1)", "rgb(186,85,211)"]
        }
      ]
    }
  };

  render() {
    console.log("leaderboard props", this.props);
    return (
      <div className="timeleft-container">
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
