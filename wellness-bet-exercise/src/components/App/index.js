import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import SignInPage from "../SignIn";
import Home from "../Home";
import fire from "../../config/fire.js";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      user_id: null
    };
  }

  componentDidMount = () => {
    this.authListener();
  };

  addUserToSqlDB = () => {
    const googleData = {
      display_name: fire.auth().currentUser.displayName, // pull of google object
      google_uuid: fire.auth().currentUser.uid, // pull off google object
      email: fire.auth().currentUser.email, // pull off google object
      profilePhoto: fire.auth().currentUser.photoURL // pull off google object
    };
    console.log("googleData", googleData);
    Axios.post("https://wellness-bet.herokuapp.com/api/users/", googleData)
      .then(res => console.log(res, "addtoSQLDB res"))
      .catch(error =>
        console.log(
          error,
          "Don't worry -- this post request did not go through because the user is already in the database"
        )
      );
  };

  setUserId = () => {
    const googleId = fire.auth().currentUser.uid;
    Axios.get(`https://wellness-bet.herokuapp.com/api/users/userId/${googleId}`)
      .then(res => this.setState({ user_id: res.data[0].user_id }))
      .catch(error => console.log(error, "getUserId error"));
  };

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        // maybe put the connection to the users table right here?
        this.setState({ user });
        this.addUserToSqlDB();
        this.setUserId();
        console.log(this.state.user_id, "user ID");
      } else {
        this.setState({
          user: null
        });
      }
    });
  };

  render() {
    console.log("user", this.state.user);
    return (
      <Router>
        <React.Fragment>
          <CssBaseline>
            {this.state.user ? <Home /> : <SignInPage />}
            <Route path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          </CssBaseline>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
