import React from "react";
import GroupCreate from './GroupCreate/GroupCreate';
import GroupJoin from './GroupJoin'

const AddOrJoinGroup = () => (
  <div>
    <h1>Add Or Join Group</h1>
    <GroupCreate />
    <GroupJoin />
  </div>
);

export default AddOrJoinGroup;
