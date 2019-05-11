import React from "react";
import GroupCreate from '../Groups/GroupCreate/GroupCreate';
import GroupJoin from '../Groups/GroupJoin'

const AddOrJoinGroup = () => (
  <div>
    <h1>Add Or Join Group</h1>
    <GroupCreate />
    <GroupJoin />
  </div>
);

export default AddOrJoinGroup;
