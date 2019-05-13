import React from "react";
import StartEndDate from './StartEndDate'

class GroupName extends React.Component {
  state = {
    group_name: '',
    groupNameAdded: false
  }

  nameAddedToggle = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      groupNameAdded: !this.state.groupNameAdded
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
        {this.state.groupNameAdded === false ?
          <form>
            <input
              type="text" 
              name="group_name"
              value={this.state.group_name}
              placeholder="Enter Group Name" 
              onChange={this.handleChange} 
            />
            {this.state.group_name.length > 0 ?
              <button onClick={this.nameAddedToggle}>
                Next
              </button>: <p className='fadedNext'>Next</p> }
          </form>: 
              <StartEndDate 
                routerProps={this.props.routerProps} 
                group_name={this.state.group_name}
                nameAddedToggle={this.nameAddedToggle} 
              />
        }
      </div>
    )
  }
}

export default GroupName;