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

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <Searchbox
          placeholder="search monsters"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
