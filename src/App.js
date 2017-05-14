import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Welcome' };
  }

  componentWillMount() {
    return fetch('http://localhost:3001')
      .then((response) => response.json())
      .then((responseJson) => this.setState(responseJson))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.message}</h2>
        </div>
      </div>
    );
  }
}

export default App;
