import React from "react";
import axios from "axios";
import { URL } from "../../constants/routes";
import GroupList from "./GroupList";

class GroupData extends React.Component {
  state = {};

  //I have the id hardcoded in here because I did not have any groups on my user at the time i needed to test this.
  //you should be able to comment out the route and uncomment out the other route to switch it to how it should be.
  getGroups = () => {
    // console.log("getGroups", this.props.user_id);
    axios
      .get(`${URL}/api/usergroups/${this.props.user_id}`)
      // .get(`${URL}/api/usergroups/1`)
      .then(res => {
        console.log("response data", res.data);
        this.setState({ groups: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getGroups();

    // console.log("componentdidmount props", this.props);
  }

  render() {
    //console.log("groupData", this.state);
    // console.log("groupData props", this.props.user_id);
    return <GroupList groups={this.props.groups} {...this.state} />;
  }
}

export default GroupData;
