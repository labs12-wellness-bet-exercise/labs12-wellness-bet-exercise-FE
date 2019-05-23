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
import Payment  from '../Payment/paymentProof';
import GroupMember from '../Groups/GroupMember';
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
import {
  Create,
  PersonAdd,
  BarChart,
  ExpandLess,
  ExpandMore,
  Whatshot
} from "@material-ui/icons";
import Collapse from "@material-ui/core/Collapse";

const drawerWidth = 300;

const styles = theme => ({
  root: {
    display: "flex",
    flexGrow: 1
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
  dashboard: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  grow: {
    flexGrow: 1
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  },
  toolbar: theme.mixins.toolbar
});


class Navigation extends React.Component {

  state = { open: true };


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

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    console.log("nav state", this.state);
    console.log("nav props", this.props);
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {console.log("nav props", this.props)}
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              BetYourSteps
            </Typography>
            <Button
              variant="contained"
              color="inherit"
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
            <ListItem
              button
              component={Link}
              className={classes.button}
              to="/api/createGroup"
            >
              <ListItemIcon>
                <Create />
              </ListItemIcon>
              <ListItemText inset primary="Create Group" />
            </ListItem>
            <ListItem
              button
              component={Link}
              className={classes.button}
              to="/api/groupJoin"
            >
              <ListItemIcon>
                <PersonAdd />
              </ListItemIcon>
              <ListItemText inset primary="Join Group" />
            </ListItem>
            <ListItem
              button
              component={Link}
              className={classes.button}
              to="/api/statsContainer"
            >
              <ListItemIcon>
                <BarChart />
              </ListItemIcon>
              <ListItemText inset primary="Stats" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button onClick={this.handleClick}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText inset primary="My Groups" />
              {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <Whatshot />
                  </ListItemIcon>
                  <ListItemText inset primary="Group 1" />
                </ListItem>
              </List>
            </Collapse>
            <GroupData user_id={this.props.user_id} {...this.props} />
          </List>
        </Drawer>

        <div className="navAndDash">
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
    );
  }
}

GroupJoin.propTypes = {};

const NavigationWrapped = withStyles(styles)(Navigation);

export default NavigationWrapped;
//bye bye lyd
