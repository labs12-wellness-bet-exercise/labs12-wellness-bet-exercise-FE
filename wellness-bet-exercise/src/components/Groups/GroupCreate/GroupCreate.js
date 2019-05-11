import React from "react";
import GroupName from './GroupName'

class GroupCreate extends React.Component {
  render(){
    return(
      <div className='groupFormContainer'>
        <h1>Create a New Group</h1>
        <GroupName />
      </div>
    )
  }
}

export default GroupCreate;
