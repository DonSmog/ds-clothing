import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import Button from "../../components/custom-button/custom-button.component";

import "./checkout.styles.scss";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <Link to="/shop">
        <Button>Continue Shopping</Button>
      </Link>
      {currentUser ? (
        <StripeCheckoutButton price={total} />
      ) : (
        <Link to="/signin">
          <Button>SIGN IN TO PAY</Button>
        </Link>
      )}
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        Card Number: 5555 5555 5555 4444 <br />
        Expiry: 12/25 <br />
        CVV: 478
      </div>
    </div>
  );
};

export default CheckoutPage;
