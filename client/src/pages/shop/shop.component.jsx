import React, { useEffect } from "react";
import { Route } from "react-router";
import { connect } from "react-redux";

import CollectionPageContainer from "../collection/collection.container";
import CollectionOverviewContainer from "../../components/collections-overview/collections-overview.container";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const Shop = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
