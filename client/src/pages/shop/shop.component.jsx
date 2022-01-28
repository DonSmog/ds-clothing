import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router";
import { connect } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
const CollectionPageContainer = lazy(() =>
  import("../collection/collection.container")
);
const CollectionOverviewContainer = lazy(() =>
  import("../../components/collections-overview/collections-overview.container")
);

const Shop = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
