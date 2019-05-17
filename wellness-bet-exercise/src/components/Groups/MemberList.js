import React from "react";
import GroupMember from "./GroupMember";
import axios from "axios";
import "./MemberList.css";

function getGroupId(url) {
  return url.split("/").pop();
}

class MemberList extends React.Component {
  state = {
    members: []
  };

  componentDidMount() {
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
      })
      .catch(error => {
        console.log("error in cdm Memberlist", error);
      });
  }

  render() {
    console.log("props memberlist", this.props.group);
    return (
      <div className="memberlist-wrapper">
        {this.props.group ? (
          <div className="memberlist-container">
            <h2 />
            {this.state.members.map(member => (
              <GroupMember member={member} />
            ))}
          </div>
        ) : (
          <div>
            <p>LOADING</p>
          </div>
        )}
      </div>
    );
  }
}

export default MemberList;
