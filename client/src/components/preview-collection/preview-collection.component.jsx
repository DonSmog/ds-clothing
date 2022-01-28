import React, { useState, useEffect } from "react";
import CollectionItem from "../collection-item/collection-item.component";
import { withRouter } from "react-router";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
  ModalContainer,
} from "./preview-collection.styles";

const Preview = ({ title, items, history, match, routeName }) => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalOpen(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [modalOpen]);

  return (
    <CollectionPreviewContainer>
      <TitleContainer
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {modalOpen ? (
          <ModalContainer className="modal">Item Added to Cart!</ModalContainer>
        ) : null}
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem
              setModalOpen={() => setModalOpen(true)}
              key={item.id}
              item={item}
            />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(Preview);
