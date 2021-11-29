import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "../collection/collection.component";
import { selectIsCollectionsLoading } from "../../redux/shop/shop.selectors";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoading(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
