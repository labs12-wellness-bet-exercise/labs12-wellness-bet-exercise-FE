import React from "react";
import GroupMember from "./GroupMember";
import axios from "axios";

function getGroupId(url) {
  return url.split("/").pop();
}

class MemberList extends React.Component {
  state = {
    members: []
  };

  componentDidMount() {
    console.log("get group id from url split", getGroupId(this.props.pathname));
    console.log("MEMBER LIST PROPS", this.props.pathname);
    axios
      .get(
        `https://wellness-bet.herokuapp.com/api/usergroups/members/${getGroupId(
          this.props.pathname
        )}`
      )
      .then(res => {
        this.setState({
          members: res.data
        });
      });
  }

  render() {
    console.log("members array", this.state.members);
    // console.log("MEMBER LIST PROPS", this.props.testingGroup[0].group_id);
    // console.log("GROUP ID", this.props.group[0].group.group_id);
    return (
      <div>
        {this.state.members.map(member => (
          <GroupMember member={member} />
        ))}
      </div>
    );
  }
}

export default MemberList;
