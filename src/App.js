import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ users: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList>
          {this.state.users.map(user => (
            <h1 key={user.id}>{user.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
