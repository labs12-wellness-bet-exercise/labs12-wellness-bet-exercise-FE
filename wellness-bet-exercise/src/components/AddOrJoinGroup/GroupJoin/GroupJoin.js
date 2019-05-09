import React from "react";

class GroupJoin extends React.Component {


  checkJoinCode = (code) => {
      if (code === joinCode) {

      } else {
         
      }
  } 

  render(){
    return(
      <h1>Enter code to join a group</h1>
      <form onSubmit={this.checkJoinCode}>
        <input placeholder="join code"/>
        <button type="submit">submit join code</button>
      </form>
    )
  }
}

export default GroupJoin;
