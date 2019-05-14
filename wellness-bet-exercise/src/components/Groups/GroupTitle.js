import React from 'react';

const GroupTitle = props => {
  return (
      <div className="one-group">
        {!props.group ? 
          <h6>Loading...</h6>
          :<h6>{props.group.group_name}</h6>}
        
       
      </div>
  );
};

export default GroupTitle;
