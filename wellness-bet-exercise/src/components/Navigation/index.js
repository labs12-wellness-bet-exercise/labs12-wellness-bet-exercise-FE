import React from 'react';
import { Link, Route } from 'react-router-dom';
import './navigation.css'
import GroupList from '../Groups/GroupList';
import * as ROUTES from '../../constants/routes';
import GroupCreate from '../AddOrJoinGroup/GroupCreate/GroupCreate';
import GroupJoin from '../AddOrJoinGroup/GroupJoin/GroupJoin'

const Navigation = (props) => (
  <div>
      <div className='horizontalNav'>
        <button onClick={props.logout}>logout</button>
      </div>
      <div className='navAndDash'>
        <div className='verticalNav'>
          <h1>My Groups</h1>
          <Link to='/groupCreate'>Create Group</Link>
          <Link to='/groupJoin'>Join Group</Link>
          <GroupList />
        </div>
        <div className='dashboard'>
          <Route path={ROUTES.GROUP_CREATE} component=  {GroupCreate} />
          <Route path={ROUTES.GROUP_JOIN} component=  {GroupJoin} />
        </div>
      </div>
  </div>
);

export default Navigation;