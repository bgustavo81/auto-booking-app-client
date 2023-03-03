import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";

import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import { NavigationRoutes } from "./components/routing/NavigationRoutes";

//Redux related imports, connects to react
import { Provider } from "react-redux";
import store from "./store";


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router forceRefresh={true}>
        <Fragment>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/*" element={<NavigationRoutes />} />
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
