import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import SignInPage from "../SignIn";
import Home from "../Home";
import fire from "../../config/fire.js";
import "./App.css";
import CssBaseline from '@material-ui/core/CssBaseline';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount = () => {
    this.authListener();
  };

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({
          user: null
        });
      }
    });
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <CssBaseline>
            {
              this.state.user ? 
              <Home />:
              <SignInPage />
            }
            <Route path=  {ROUTES.HOME}   component={Home} />
            <Route path=  {ROUTES.SIGN_IN}   component=  {SignInPage} />
          </CssBaseline>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
