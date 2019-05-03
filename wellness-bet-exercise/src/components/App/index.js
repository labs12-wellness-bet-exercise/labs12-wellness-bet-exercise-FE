import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Navigation from '../Navigation';

class App extends React.Component {
  render(){
    return(
      <Router>
        <div>
          <Navigation />
        </div>
      </Router>
    )
  }
}
  
  

export default App;
