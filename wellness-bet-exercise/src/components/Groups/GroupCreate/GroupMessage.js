import React from "react";
import GroupPhoto from './GroupPhoto'

class GroupMessage extends React.Component {
  state = {
    group_message: '',
    groupMessageAdded: false
  }

  messageAddedToggle = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      groupMessageAdded: !this.state.groupMessageAdded
    })
  }
  
  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }
  render(){
    return(
      <div>
        <p>Buy In amount: ${this.props.buy_in_amount}</p>
        {this.state.groupMessageAdded === false ?
          <form>
            <textarea
              type="text" 
              name="group_message"
              value={this.state.group_message}
              placeholder="Post a greeting for your group!" 
              onChange={this.handleChange} 
            />
            <button onClick={this.props.buyInBoolToggle}>
                Back
              </button>
            {this.state.group_message.length > 0 ?
              <button onClick={this.messageAddedToggle}>
                Next
              </button>: <p className='fadedNext'>Next</p> }
          </form>: 
              <GroupPhoto  
              group_name={this.props.group_name}
              start_date={this.props.start_date}
              end_date={this.props.end_date}
              buy_in_amount={this.props.buy_in_amount}
              group_message={this.state.group_message}
              messageAddedToggle={this.messageAddedToggle}
              routerProps={this.props.routerProps}
              />
        }
      </div>
    )
  }
}

export default GroupMessage;