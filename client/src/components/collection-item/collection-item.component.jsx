import React, { useState } from "react";

import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.action";

import "./collection-item.styles.scss";
import Button from "../custom-button/custom-button.component";

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;
  const [addItem, setAddItem] = useState(false);

  const handleButtonClick = () => {
    setAddItem(true);
    addItemToCart(item);
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
        {addItem ? "ITEM ADDED" : "ADD TO CART"}
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispacth) => ({
  addItemToCart: (item) => dispacth(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
