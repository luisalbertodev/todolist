import { useEffect } from "react";
import AOS from "aos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "views/public/Login";
import Page404 from "views/public/Page404";

import Main from "views/private/Main";

import "aos/dist/aos.css";
import "antd/dist/antd.css";

export default () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/identificate">
          <Login />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
};
