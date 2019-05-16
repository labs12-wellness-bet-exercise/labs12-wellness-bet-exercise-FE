import React from "react";
import GroupMember from "./GroupMember";
import axios from "axios";

class MemberList extends React.Component {
  state = {
    members: []
  };

  componentDidMount() {
    console.log("MEMBER LIST PROPS", this.props);
    axios
      .get(
        `https://wellness-bet.herokuapp.com/api/participants/members/${
          this.props.group[0].group_id
        }`
      )
      .then(res => {
        this.setState({
          members: res.data
        });
      });
  }
  //
  render() {
    console.log(this.state.members);
    // console.log("MEMBER LIST PROPS", this.props.testingGroup[0].group_id);
    // console.log("GROUP ID", this.props.group[0].group.group_id);
    return (
      <div>
        <GroupMember />
      </div>
    );
  }
}

export default MemberList;
