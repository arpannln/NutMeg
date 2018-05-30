import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YjBkZWVhMDQ2MjNjNDU3ZjBjMDA4ZDgiLCJpYXQiOjE1Mjc2Mzk3OTJ9.h6cCwvD9WU59nzjWiD1zpOHBBOggyLr1QcfzShtf3qQ';

//reminder to self: need to use refresh key to generate a new access key every 30 min
//think we can do this with a simple set interval defined here 
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> {KEY} </h1>
      </div>
    );
  }
}

export default App;
