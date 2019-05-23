import axios from "axios";
import React from "react";
import { Link, Route } from "react-router-dom";
import "./navigation.css";
import * as ROUTES from "../../constants/routes";
import CreateGroup from "../Groups/GroupCreate/CreateGroup";
import GroupJoin from "../Groups/GroupJoin/GroupJoin";
import Group from "../Groups/Group";
import GroupData from "../Groups/GroupData";
import StatsContainer from "../Stats/statsContainer";
import Checkout from '../stripe/Checkout'
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";


class Navigation extends React.Component {
  state = {};

  getGroupInfo = () => {
    console.log("nav getgroups", this.props.user_id);
    axios
      .get(`${URL}/api/usergroups/${this.props.user_id}`)
      // .get(`${ROUTES.URL}/api/groups/1`)
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
        <CssBaseline />
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

              <Link to="/api/createGroup">Create Group</Link>
              <Link to="/api/groupJoin">Join Group</Link>
              <Link to="/api/statsContainer">Stats</Link>
              <Link to={ROUTES.STRIPE}>Upgrade to Premium</Link>
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
                path={ROUTES.CREATE_GROUP}
                render={routeProps => (
                  <CreateGroup {...routeProps} {...this.props} />
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
              <Route
                path={ROUTES.STRIPE}
                render={routeProps => {
                  return (
                    <Checkout
                      {...routeProps}
                      {...this.props}
                      user_id={this.props.user_id}
                      name={'Wellness Bet-Exercise'}
                      description={'Premium monthly membership allows you to creat and participate in multiple groups'}
                      amount={5}
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
