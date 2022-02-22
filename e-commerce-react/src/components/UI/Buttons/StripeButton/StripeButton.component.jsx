import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeButton(props) {
  const priceForStripe = props.price * 100;
  const publishableKey =
    "pk_test_51KVnvzHORaDuKPLLU3QgUoUbEkFJVCXtWs67SHwxzMfXBOw2DRfzu6w5zskTJDHsQvrj11Fu0sQA0LKfLOVL6riR00O2gam8wx";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${props.price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeButton;
