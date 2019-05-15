import React from "react";
import axios from "axios";
import { URL } from "../../constants/routes";
import GroupList from "./GroupList";

class GroupData extends React.Component {
  state = {};

  componentDidMount() {
    console.log("componentdidmount", this.state);
    axios
      .get(`${URL}/api/usergroups/${140}`)
      //.get(`${URL}/api/usergroups/1`)
      .then(res => {
        console.log("response data", res.data);
        this.setState({ groups: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // componentWillReceiveProps(newProps) {
  //   if (this.props.match !== undefined)
  //     // if (this.props.match.params !== newProps.match.params) {
  //     this.fetchGroups(newProps.match.params.id);
  //   // }
  // }

  render() {
    console.log("groupData", this.state.groups);
    console.log("groupData props", this.props);
    return <GroupList groups={this.state.groups} />;
  }
}

export default GroupData;
