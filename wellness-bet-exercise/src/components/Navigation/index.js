import React from 'react';
import { Link, Route } from 'react-router-dom';
import './navigation.css'
import * as ROUTES from '../../constants/routes';
import GroupCreate from '../Groups/GroupCreate/GroupCreate';
import GroupJoin from '../Groups/GroupJoin/GroupJoin';
import Group from '../Groups/Group';
import GroupData from '../Groups/GroupData'

const Navigation = props => (
  <div>
    <div className="horizontalNav">
      <button onClick={props.logout}>logout</button>
    </div>
      <div className='navAndDash'>
        <div className='verticalNav'>
          <div className='myGroupsHeader'>
            <h3>My Groups</h3>
            <GroupData />
          </div>
          
            <Link to='/groupCreate'>Create Group</Link>
            <Link to='/groupJoin'>Join Group</Link>
          
        </div>
        <div className='dashboard'>
          <Route path={ROUTES.GROUP_VIEW}
            render={(props) => (<Group {...props}/>)}/>
          <Route path={ROUTES.GROUP_CREATE}
            render={(props) => (<GroupCreate{...props}/>)}/>
          <Route path={ROUTES.GROUP_JOIN} 
            render={(props) => (<GroupJoin{...props} />)}/>
        </div>
      </div>
    </div>
);

export default Navigation;
