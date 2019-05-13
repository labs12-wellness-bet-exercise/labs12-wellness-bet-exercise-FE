import React from 'react';
import GroupMessage from './GroupMessage';

class BuyInAmount extends React.Component {
  state = {
    buyInBool: false,
    buy_in_amount: 0
  }
  
  handleChange = e => {
    this.setState({
      ...this.state,
      buy_in_amount: e.target.value
    })}
  
    buyInBoolToggle = e => {
      e.preventDefault()
      this.setState({
        ...this.state,
        buyInBool: !this.state.buyInBool
      })
    }
  

  render() {
    return(
      <>
        <p>Competition will run from {this.props.start_date} to {this.props.end_date}.</p>
        {this.state.buyInBool === false ?
          <div>
            <label>Buy-in amount</label>
            <input
                type="number" 
                name="buy_in_amount"
                value={this.state.buy_in_amount}
                placeholder="Enter buy-in amount..." 
                onChange={this.handleChange} 
              /> 
              <button onClick={this.props.datesAddedToggle}>
                Back
              </button>
              {this.state.buy_in_amount > 0 ? 
              <button 
                onClick={this.buyInBoolToggle}>
                Next
              </button>:
              <p className='fadedNext'>Next</p>}
           </div>:
         <GroupMessage 
           group_name={this.props.group_name}
           start_date={this.props.start_date}
           end_date={this.props.end_date}
           buy_in_amount={this.state.buy_in_amount}
           buyInBoolToggle={this.buyInBoolToggle}
           routerProps={this.props.routerProps}
         />}
     </> 
    ) 
  }
}

export default BuyInAmount;