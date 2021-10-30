import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";

import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Signs from "./pages/signs/signin_and_signup.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUSer } from "./redux/user/user.action";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUSer } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUSer({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUSer(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <Signs />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const matchDispatchToProps = (dispatch) => ({
  setCurrentUSer: (user) => dispatch(setCurrentUSer(user)),
});

export default connect(mapStateToProps, matchDispatchToProps)(App);
