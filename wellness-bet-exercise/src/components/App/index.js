import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignInPage from '../SignIn';
import Home from '../Home'
import fire from '../../config/fire.js';
import './App.css'

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
          <div>
            {this.state.user ? <Home /> : <SignInPage /> }
          </div>
          <Route path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        </div>
      </Router>
    )
  }
}
  
  

export default App;
