import React from "react";
import ShopData from "./shop.data";
import Preview from "../../components/preview-collection/preview-collection.component";

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: ShopData,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionsProps }) => (
          <Preview key={id} {...otherCollectionsProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
