import React from 'react';
import BuyInAmount from './BuyInAmount.js'

class StartEndDate extends React.Component {
  state = {
    start_date: '',
    end_date: '',
    datesAdded: false
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  datesAddedToggle = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      datesAdded: !this.state.datesAdded
    })
  }

  render() {
    return(
      <>
      <h2>{this.props.group_name}</h2>
      {this.state.datesAdded === false ?
        <div className='calendarContainer'>
          <label>Competition start date</label>
          <input
            onChange={this.handleChange}
            type='date'
            name='start_date'
            value={this.state.start_date}/>
          <label>Competition end date</label>
          <input
            onChange={this.handleChange}
            type='date'
            name='end_date'
            value={this.state.end_date}/>
            <div className='buttonBox'>
              <button onClick={this.props.nameAddedToggle}>
                Back
              </button>
              {this.state.start_date.length > 0 &&
              this.state.end_date.length > 0 ? 
              <button 
                onClick={this.datesAddedToggle}>
                Next
              </button>:
              <p className='fadedNext'>Next</p>
               }
          </div>
      </div>
      :<BuyInAmount 
         group_name={this.props.group_name}
         start_date={this.state.start_date}
         end_date={this.state.end_date}
         datesAddedToggle={this.datesAddedToggle}
         routerProps={this.props.routerProps}
         />
      }
      </>
    )
  }
} 

export default StartEndDate
