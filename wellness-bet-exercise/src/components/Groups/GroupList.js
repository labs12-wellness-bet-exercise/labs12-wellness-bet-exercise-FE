import React from 'react'
import Group from './Group';



const GroupList = props =>{
    return(
        <div className="group-list">
        {props.groups.map(group =>(
            <Group groupArray ={group} />
        ))}
        </div>
    );
}

export default GroupList;