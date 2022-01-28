import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import "./collection.styles.scss";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalOpen(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [modalOpen]);

  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      {modalOpen ? <div className="modal">Item Added to Cart!</div> : null}
      <div className="items">
        {items.map((item) => (
          <CollectionItem
            setModalOpen={() => setModalOpen(true)}
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
