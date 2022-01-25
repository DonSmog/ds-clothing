import React from "react";
import { withRouter } from "react-router";

import { MenuItemContainer, BackgroundImage, Content } from "./menu-item.style";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Content>
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </Content>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
