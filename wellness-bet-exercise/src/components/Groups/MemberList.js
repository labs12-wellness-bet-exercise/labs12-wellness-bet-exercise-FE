import React from "react";
import GroupMember from "./GroupMember";
import axios from "axios";

class MemberList extends React.Component {
  state = {
    members: []
  };

  componentDidMount() {
    // axios.get(
    //   `https://wellness-bet.herokuapp.com/api/participants/members/${
    //     this.props.group.group[0].group_id
    //   }`
    // );
  }

  render() {
    console.log("MEMBER LIST PROPS", this.props.group.group_id);
    // console.log("GROUP ID", this.props.group.group.group_id);
    return (
      <div>
        <GroupMember />
      </div>
    );
  }
}

export default MemberList;
