import React, { Component } from 'react';
import Home from './components/Home';
import './App.css';

const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YjBkZWVhMDQ2MjNjNDU3ZjBjMDA4ZDgiLCJpYXQiOjE1Mjc2Mzk3OTJ9.h6cCwvD9WU59nzjWiD1zpOHBBOggyLr1QcfzShtf3qQ';
let data = { new_access_token: ''};

async function getNewKey () {
  console.log('hi');
  data = await fetch(`https://api.sportdeer.com/v1/accessToken?refresh_token=${KEY}`);
};

class App extends Component {

  constructor() {
    super();
    getNewKey();

    //since this is a temporary key lasting only 30 minutes, let's refresh this key every 29 minutes
    setInterval(getNewKey, 1740000);
    this.state = { key: ''};
  }

  componentDidMount() {
    
  }

  render() {
    console.log(this.state.key);
    return (
      <div className="App">
        <Home></Home>
      </div>
    );
  }
}

export default App;
