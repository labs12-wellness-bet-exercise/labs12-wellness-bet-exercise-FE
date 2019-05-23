import React from 'react';
import Checkout from './Checkout';
import logo from '../../logo.svg'

class Premium extends React.Component {
  render(){
    return(
      <div className='premium'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Upgrade to Premium</h2>
        <p>
          <Checkout
             name={'Wellness Bet-Exercise'}
             description={'Premium monthly membership allows you to creat and participate in multiple groups'}
             amount={5} />
        </p>
      </div>
    )
  }
}

export default Premium;