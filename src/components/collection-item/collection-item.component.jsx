import React from "react";

import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.action";

import "./collection-item.styles.scss";
import Button from "../custom-button/custom-button.component";

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;
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
        <span className="price">{price}</span>
      </div>
      <Button onClick={() => addItemToCart(item)} inverted>
        ADD TO CART
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispacth) => ({
  addItemToCart: (item) => dispacth(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
