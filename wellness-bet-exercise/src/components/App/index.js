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
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
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
