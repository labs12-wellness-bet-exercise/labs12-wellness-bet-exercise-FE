import React from "react";
import { NavLink } from 'react-router-dom'

import GroupTitle from "./GroupTitle";

class GroupList extends React.Component {
  render() {
    return this.props.groups ? (
      <div>
        {this.props.groups.map(group => {
          console.log(group)
          return (
            <NavLink to={`/groups/${group.group_id}`}>
              <GroupTitle group={group} />
            </NavLink>
          );
        })}
      </div>
    ) : (
      <h2>loading...</h2>
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
