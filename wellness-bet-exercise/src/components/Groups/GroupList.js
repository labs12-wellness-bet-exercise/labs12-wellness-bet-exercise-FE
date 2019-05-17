import React from "react";
import { NavLink } from "react-router-dom";

import GroupTitle from "./GroupTitle";

class GroupList extends React.Component {
  render() {
    console.log("grouplist props", this.props);
    return this.props.groups ? (
      <div>
        {this.props.groups.map(group => {
          console.log("user_id", group.user_id);
          return (
            <NavLink to={`/api/groups/${group.group_id}`}>
              <GroupTitle
                group={group}
                user_id={group.user_id}
                group_id={group.group_id}
                paid={group.paid}
                buyin_proof={group.buyin_proof}
              />
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
