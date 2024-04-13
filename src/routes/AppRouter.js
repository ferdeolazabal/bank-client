// @ts-nocheck
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Layout from "../components/Layout";
import LoginScreen from "../components/Login/LoginScreen";
import { startChecking } from "../redux/actions/auth";

const AppRouter = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const checking = useSelector((state) => state.auth.checking);

  const isAuthenticated = !!user.id;

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return <h5>Espere...</h5>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/login"
            component={LoginScreen}
            isAuthenticated={isAuthenticated}
          />

          <PrivateRoute
            path="/payments"
            component={Layout}
            isAuthenticated={isAuthenticated}
          />

          <Redirect to={isAuthenticated ? "/payments" : "/login"} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
