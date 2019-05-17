import React from "react";
import axios from "axios";
import * as ROUTES from "../../constants/routes";
import LeaderUser from "./LeaderUser";

class Leaderboard extends React.Component {
  state = {};

  componentDidMount() {
    axios
      .get(`${ROUTES.URL}/api/usergroups/members/1`)
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log("leaderboard state", this.state.users);
    return (
      <div>
        <h2>Leaderboard</h2>

        {this.state.users ? (
          this.state.users.map(user => {
            return <LeaderUser user={user} />;
          })
        ) : (
          <h5>nope</h5>
        )}
      </div>
    );
  }
}

export default Leaderboard;
