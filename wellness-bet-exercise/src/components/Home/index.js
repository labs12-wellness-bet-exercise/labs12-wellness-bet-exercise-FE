import React from "react";
import axios from 'axios'; 
import Navigation from '../Navigation';
import fire from '../../config/fire';
import * as ROUTES from "../../constants/routes";

class Home extends React.Component {
  state= {

  }

  componentDidMount() {
    localStorage.setItem('user_id', this.props.user_id)
    axios
      .get(`${ROUTES.URL}/api/users/`)
      .then(res => {
        this.setState({
          users: res.data
        })
      })
      .catch(err =>{
        console.log(err)
      })
  }

  logout = () => {
    fire.auth().signOut();
  }

 render(){
   return(
     <div>
         <Navigation 
           user={this.props.user}
           user_id={this.props.user_id}
           logout={this.logout}/>
     </div>
   )
 }
}
 


export default Home;
