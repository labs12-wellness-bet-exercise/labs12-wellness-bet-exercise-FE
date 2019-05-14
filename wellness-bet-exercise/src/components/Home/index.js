import React from "react";
import axios from 'axios'; 
import Navigation from '../Navigation';
import fire from '../../config/fire';


class Home extends React.Component {
  state= {

  }

  componentDidMount() {
    axios
      .get('https://wellness-bet.herokuapp.com/api/users/')
      // .get('https://localhost:5000/api/users/')
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
         <Navigation logout={this.logout}/>
     </div>
   )
 }
}
 


export default Home;
