import React from "react";

const GroupTitle = props => {
  return (
    <div className="one-group">
      {console.log("grouptitle props", props)}
      {!props.group ? <h6>Loading...</h6> : <h6>{props.group.group_name}</h6>}
    </div>
  );
};

export default GroupTitle;
