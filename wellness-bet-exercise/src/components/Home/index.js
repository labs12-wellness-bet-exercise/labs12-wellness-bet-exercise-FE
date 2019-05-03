import React from "react";
import axios from 'axios';

class Home extends React.Component {
  state= {

  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/users')
      .then(res => {
        this.setState({
          users: res.data
        })
      })
      .catch(err =>{
        console.log(err)
      })
  }

 render(){
   return(
     <div>
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
