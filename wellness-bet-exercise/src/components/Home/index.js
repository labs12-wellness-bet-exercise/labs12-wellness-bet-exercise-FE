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
         <Navigation />
       <button onClick={this.logout}>logout</button>
       <h1>Home</h1>
       {this.state.users ?
         this.state.users.map(user => {
           return (
             <>
               <h3>{user.full_name}</h3>
               <img src={user.profilePhoto} alt='user avatar'/>
             </>
         )}): <p>Loading users...</p>
       }
     </div>
   )
 }
}
 


export default Home;
