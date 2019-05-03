import React from 'react';



const Group = props =>{
    return (
        <div className="one-group">
        <h2>Group:</h2>
        <h3><strong>Group Name: </strong>{props.groupArray.group_name}</h3>
        <h3><strong>Buy In Amount: </strong>{props.groupArray.buy_in_amount}</h3>
        <h3><strong>Start Date: </strong>{props.groupArray.start_date}</h3>
        <h3><strong>End Date: </strong>{props.groupArray.end_date}</h3>
        <h3><strong>Join Code: </strong>{props.groupArray.join_code}</h3>
        <h3><strong>Pot Total: </strong>{props.groupArray.pot_total}</h3>
        </div>
    );
}

export default Group;