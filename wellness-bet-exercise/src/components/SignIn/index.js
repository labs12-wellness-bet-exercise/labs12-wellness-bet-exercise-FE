import React from "react";
import fire from '../../config/fire';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'; 

const firebaseuiConfig = { 
  signInFlow: 'popup', 
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ]
} 

class SignIn extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
    }
  } 

  render() {
    return (
      <div>
        <StyledFirebaseAuth 
        uiConfig={firebaseuiConfig} 
        firebaseAuth={fire.auth()}
        />
      </div>
    )
  }



}
export default SignIn;
