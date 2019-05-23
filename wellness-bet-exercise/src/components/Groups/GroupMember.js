import React from "react";
import Payment from '../Payment/paymentProof';

class GroupMember extends React.Component {

  constructor (props){
    super(props)
    this.state={
      userData: props
    }
  }
  render() {
    console.log('Group Member State:', this.state);
    console.log("group member props:", this.props);
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
        {/* <img
          alt={this.props.member.display_name}
          src={this.props.member.profilePhoto}
        /> */}
        {/* If buyin_proof exists, display, otherwise display payment upload */}
        <h5>Proof of Buyin: </h5>
        <Payment payment={this.state} />
        <img alt="proof of buyin" src={this.props.member.buyin_proof} />
      </div>
    );
  }
}

export default GroupMember;
