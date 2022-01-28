/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./collection-item.styles.scss";

import { connect } from "react-redux";
import { useSelector } from "react-redux";

import Button from "../custom-button/custom-button.component";
import { addItemToCart } from "../../redux/cart/cart.action";
import { selectCartItems } from "../../redux/cart/cart.selector";

const CollectionItem = ({ item, addItemToCart, setModalOpen }) => {
  const { name, price, imageUrl } = item;
  const [addItem, setAddItem] = useState(false);
  const cartItems = useSelector(selectCartItems);

  const checkIfItemInCart = () => {
    if (cartItems) {
      const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
      if (cartItem) {
        setAddItem(true);
      } else {
        setAddItem(false);
      }
    }
  };

  useEffect(() => {
    checkIfItemInCart();
  }, [cartItems]);

  const handleButtonClick = () => {
    setAddItem(true);
    addItemToCart(item);
    setModalOpen(true);
  };
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button onClick={handleButtonClick} inverted>
        {addItem ? "ADD MORE" : "ADD TO CART"}
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispacth) => ({
  addItemToCart: (item) => dispacth(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
