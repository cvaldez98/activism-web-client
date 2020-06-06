import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
state = {
    data: null
  };

    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callAuthLink = async () => {
    const response = await fetch('/get_auth_link');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    console.log(body);
    window.open(body.authUrl)
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.callAuthLink}>Suuuuuup</button>
        </header>
      </div>
    );
  }
}

export default App;