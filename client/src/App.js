import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GlobalStyle } from "./GlobalStyles";

import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.action";

import Homepage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Signs from "./pages/signs/signin_and_signup.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <Signs />)}
        />
      </Switch>
    </div>
  );
};

export default App;
