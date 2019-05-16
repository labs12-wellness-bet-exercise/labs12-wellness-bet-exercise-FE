import React from "react";
import GroupMember from "./GroupMember";

const GroupMemberList = props => {
  return (
    <div>
      {props.map(member => (
        <GroupMember member={member} />
      ))}
    </div>
  );
};

export default GroupMemberList;
