import React from "react";

const LeaderUser = props => {
  return (
    <div>
      <h6>{props.user.display_name}</h6>
    </div>
  );
};

export default LeaderUser;
