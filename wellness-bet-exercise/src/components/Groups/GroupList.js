import React from "react";

import Group from "./Group";

class GroupList extends React.Component {
  render() {
    return this.props.groups ? (
      <div>
        {this.props.groups.map(group => {
          return <Group groups={group} />;
        })}
      </div>
    ) : (
      <h2>go fuck yourself</h2>
    );

    // <div>testing</div>
  }
}

export default GroupList;

// {
//   /* <div className="group-list">
//  </div>   {props.groups.map(group =>(
//     <Group groupArray ={group} />))}
//   </div> */
// }
