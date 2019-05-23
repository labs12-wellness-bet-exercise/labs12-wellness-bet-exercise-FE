const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_wteo81NdQQpXfb9tdxeraNxt00tH0RhTvm'
  : 'pk_test_F23mOvFzqh4vryBlR17LHZac00JeEY39GA';

  export default STRIPE_PUBLISHABLE;