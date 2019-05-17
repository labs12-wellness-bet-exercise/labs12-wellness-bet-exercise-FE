import React from "react";

class GroupMember extends React.Component {
  render() {
    console.log("group member props", this.props);
    return (
      <div>
        <div>
          {this.props.member.paid ? (
            <h6>approved</h6>
          ) : (
            <h6>awaiting payment approval</h6>
          )}
        </div>
        <h4>{this.props.member.display_name}</h4>
        <img
          alt={this.props.member.display_name}
          src={this.props.member.profilePhoto}
        />
        <h5>Proof of Buyin: </h5>
        <img alt="proof of buyin" src={this.props.member.buyin_proof} />
      </div>
    );
  }
}

export default GroupMember;
