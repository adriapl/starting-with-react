import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/searchbox/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ users: users }));
  }

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="User to search."
          handleChance={event =>
            this.setState({ searchField: event.target.value })
          }
        />
        <CardList users={filteredUsers}></CardList>
      </div>
    );
  }
}

export default App;
