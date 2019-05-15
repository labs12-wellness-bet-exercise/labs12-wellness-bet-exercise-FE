import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import SignInPage from "../SignIn";
import Home from "../Home";
import fire from "../../config/fire.js";
import "./App.css";
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
     Axios.post(`${ROUTES.URL}/api/users/`, googleData)
      .then(res => console.log(res, "addtoSQLDB res"))
      .catch(error => console.log(error, "addtoSQLDB error"));
  };

  setUserId = () => {
    const googleId = fire.auth().currentUser.uid;
    Axios.get(`${ROUTES.URL}/api/users/userId/${googleId}`)
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
            {this.state.user ? 
              <Home 
                user={this.state.user}
                user_id={this.state.user_id}/>
                : <SignInPage />}
            {/* <Route path={ROUTES.HOME}
              render={(props) => (
                <Home {...props}
                  user={this.state.user}
                  user_id={this.state.user_id}/>)}/> */}
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
