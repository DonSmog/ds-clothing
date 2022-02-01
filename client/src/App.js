import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {ErrorBoundary} from 'react-error-boundary'
import { GlobalStyle } from "./GlobalStyles";
import Spinner from "./components/spinner/spinner.component";
import ErrorFallback from "./components/error-boundary/error-fallback.component";

import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.action";

import Header from "./components/header/header.component";
const Homepage = lazy(() => import("./pages/homepage/homepage.component"));
const Shop = lazy(() => import("./pages/shop/shop.component"));
const Signs = lazy(() => import("./pages/signs/signin_and_signup.component"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {
        window.location.reload(false);
      }} >
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <Signs />)}
          />
        </Suspense>
      </Switch>
    </ErrorBoundary>
    </div>
  );
};

export default App;
