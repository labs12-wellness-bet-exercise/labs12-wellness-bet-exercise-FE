import React from "react";
import GroupName from './GroupName'

class GroupCreate extends React.Component {
  render(){
    return(
      <div className='groupFormContainer'>
        <h1>Create a New Group</h1>
        <GroupName routerProps={this.props}/>
      </div>
    )
  }
}

export default GroupCreate;
