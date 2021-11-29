import React from "react";

import { HomePageContainer } from "./homepage.styles";

import Directory from "../../components/directory/directory.component";

const Homepage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Homepage;
