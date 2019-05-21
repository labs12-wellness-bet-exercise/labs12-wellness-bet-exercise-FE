import React from "react";
import fire from "../../config/fire";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "./index.css";

const firebaseuiConfig = {
  signInFlow: "popup",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
};

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="welcome">
        <h1>Welcome to Wellness Bet Fitness!</h1>
        <StyledFirebaseAuth
          uiConfig={firebaseuiConfig}
          firebaseAuth={fire.auth()}
        />
      </div>
    );
  }
}
export default SignIn;
