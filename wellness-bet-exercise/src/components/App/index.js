import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import AdminPage from '../AdminGroupDash';
import Home from '../Home'
import fire from '../../config/fire.js';

class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount = () => {
    this.authListener();
  }

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user }); 
      } 
      else {
        this.setState({
          user: null
        })
      }
    })
  }

  render(){
    return(
      <Router>
        <div>
        
          <hr />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} /> 
          <div>
            {this.state.user ? <Home /> : <SignInPage /> }
          </div>
        </div>
      </Router>
    )
  }
}
  
  

export default App;
