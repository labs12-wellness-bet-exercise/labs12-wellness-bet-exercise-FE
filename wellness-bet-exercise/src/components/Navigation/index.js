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
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar
});

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
    const { classes } = this.props;
    return (
      <div>
        {console.log("nav props", this.props)}
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className="horizontalNav">
            <Typography variant="h6" color="inherit" noWrap>
              Wellness Bet Exercise
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={this.props.logout}
            >
              logout
            </Button>
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <Divider />
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

GroupJoin.propTypes = {};

const NavigationWrapped = withStyles(styles)(Navigation);

export default NavigationWrapped;
//bye bye lyd
