import React from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import "./navigation.css";
import * as ROUTES from "../../constants/routes";
import GroupCreate from "../Groups/GroupCreate/GroupCreate";
import GroupJoin from "../Groups/GroupJoin/GroupJoin";
import Group from "../Groups/Group";
import GroupData from "../Groups/GroupData";
import StatsContainer from "../Stats/statsContainer";
//import Payment from "../Payment/paymentProof.js";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

class Navigation extends React.Component {
  state = {};

  getGroupInfo = () => {
    console.log("nav getgroups", this.props.user_id);
    axios
      //.get(`${URL}/api/usergroups/${this.props.user_id}`)
      .get(`${ROUTES.URL}/api/groups/1`)
      .then(res => {
        console.log("new response data", res.data);
        this.setState({ groups: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getGroupInfo();
  }

  render() {
    console.log("nav state", this.state);
    console.log("nav props", this.props);
    return (
      <div>
        {console.log("nav props", this.props)}
        <AppBar>
          <Toolbar className="horizontalNav">
            <Button
              variant="contained"
              color="primary"
              onClick={this.props.logout}
            >
              logout
            </Button>
          </Toolbar>
        </AppBar>
        <div className="appContainer">
          <div className="navAndDash">
            <div className="verticalNav">
              <div className="myGroupsHeader">
                <h3>My Groups</h3>
                <GroupData user_id={this.props.user_id} {...this.props} />
              </div>

              <Link to="/api/groupCreate">Create Group</Link>
              <Link to="/api/groupJoin">Join Group</Link>
              <Link to="/api/statsContainer">Stats</Link>
            </div>

            <div className="dashboard">
              <Route
                path={ROUTES.GROUP_VIEW}
                render={routeProps => {
                  return (
                    <Group
                      {...routeProps}
                      {...this.props}
                      user_id={this.props.user.user_id}
                      buyin={this.state.buy_in_amount}
                    />
                  );
                }}
              />
              <Route
                path={ROUTES.GROUP_CREATE}
                render={routeProps => (
                  <GroupCreate {...routeProps} {...this.props} />
                )}
              />
              <Route
                path={ROUTES.GROUP_JOIN}
                render={routeProps => {
                  return <GroupJoin {...this.props} {...routeProps} />;
                }}
              />
              <Route
                path={"/api/statsContainer"}
                render={renderProps => {
                  return (
                    <StatsContainer
                      {...renderProps}
                      state={this.state}
                      {...this.props}
                    />
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
//hey, its me lyd
