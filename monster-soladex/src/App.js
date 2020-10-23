import React, { Component } from 'react';
import './App.css';
import { Cardlist } from './components/card-list/card-list.component';
import { Searchbox } from './components/searchbox/searchbox.component';
// https://jsonplaceholder.typicode.com/users

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  
  }

  //use fetch and promises to make an API call
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );

    return (
      <div className="App">
      <h1> Monsters Roladex </h1>
        <Searchbox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
