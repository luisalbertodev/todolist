/* eslint-disable react/destructuring-assignment */
import { Redirect } from "react-router-dom";
import { USER_AUTH } from "constant";
import { getLocalStorage } from "helpers";

// Test every passed-in auth verification function.
const verifyAuth = () => {
  const userAuth = getLocalStorage({ type: USER_AUTH });
  return !!userAuth;
};

// Authentication HOC
export const withAuth =
  (Component, reedirectPath = "/identificate") =>
  (props) => {
    const CONFIG = {
      pathname: reedirectPath,
      state: { from: props.location },
    };

    const isAuthorized = verifyAuth();
    return isAuthorized ? <Component {...props} /> : <Redirect to={CONFIG} />;
  };
