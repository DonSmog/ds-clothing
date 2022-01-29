import React from "react";

import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JkD1gBNukQQb1IyYKEorjWgpOGqdKCSKLsRGhWUSA1ru3mU9kWaH4L3jR70McSrsRLbGCB8LCqFSD7DN5M2o6os00lMVu2Eeg";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment Successful! Thank you for your purchase.");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        panelLabel="Pay Now"
        name="DonSmog Cloths"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeCheckoutButton;
