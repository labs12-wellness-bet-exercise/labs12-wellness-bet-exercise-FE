import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from '../../constants/stripe';
import * as ROUTES from '../../constants/routes';

const CURRENCY = 'US';

const fromDollarToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful')
};

const errorPayment = data => {
  alert('Payment Error')
};

const onToken = (amount, description) => token => 
  axios.post(`${ROUTES.URL}/api/checkout`,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromDollarToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount}) =>
  <StripeCheckout 
    name={name}
    description={description}
    amount={fromDollarToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />

  export default Checkout;