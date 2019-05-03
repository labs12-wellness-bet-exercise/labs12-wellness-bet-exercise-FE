import GroupList from '../Groups/GroupList'
import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super();
    this.state = {
      groups: []
    };
  }

  

  componentDidMount() {
    this.getGroups('https://swapi.co/api/people');
  }

  getGroups = URL => {
  
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ groups: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">Groups</h1>
        
        <GroupList groups = {this.state.groups}/>
        
      </div>
    );
  }

  
}

export default App;
