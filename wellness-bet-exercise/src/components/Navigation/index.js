
import React from 'react';
import { Link, Route } from 'react-router-dom';
import './navigation.css'
import * as ROUTES from '../../constants/routes';
import GroupCreate from '../Groups/GroupCreate/GroupCreate';
import GroupJoin from '../Groups/GroupJoin/GroupJoin';
import Group from '../Groups/Group';
import GroupData from '../Groups/GroupData'
import StatsContainer from '../Stats/statsContainer'


const Navigation = props => {
  return (
    <div>
      {console.log(props)}
      <div className="horizontalNav">
        <button onClick={props.logout}>logout</button>
      </div>
      <div className="navAndDash">
        <div className="verticalNav">
          <div className="myGroupsHeader">
            <h3>My Groups</h3>
            <GroupData user_id={props.user_id} />
          </div>

          <Link to="/api/groupCreate">Create Group</Link>
          <Link to="/api/groupJoin">Join Group</Link>
          <Link to="/api/statsContainer">Stats</Link>
        </div>

        <div className="dashboard">
          <Route
            path={ROUTES.GROUP_VIEW}
            render={routeProps => {
              return <Group {...routeProps} {...props} />;
            }}
          />
          <Route
            path={ROUTES.GROUP_CREATE}
            render={routeProps => <GroupCreate {...routeProps} {...props} />}
          />
          <Route
            path={ROUTES.GROUP_JOIN}
            render={routeProps => {
              return <GroupJoin {...props} {...routeProps} />;
            }}
          />
          <Route
            path={"/api/statsContainer"}
            render={routeProps => {
              return <StatsContainer {...props} {...routeProps} />;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
//hey, its me lyd
