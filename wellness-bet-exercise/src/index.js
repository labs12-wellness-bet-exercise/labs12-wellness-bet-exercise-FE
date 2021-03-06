import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

import App from "./components/App";

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Router>
    <AppWithRouter />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
