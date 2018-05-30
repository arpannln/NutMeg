import React, { Component } from 'react';


export default class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    let data = fetch('https://api.sportdeer.com/v1/countries?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YjBkZWVhMDQ2MjNjNDU3ZjBjMDA4ZDgiLCJhY2Nlc3NfbGV2ZWwiOjEsImlhdCI6MTUyNzcwMDMxNywiZXhwIjoxNTI3NzAyMTE3fQ.alDAAdMSju_IRIje-4BiCGll-wLPJHiBgPbjkg3Ja24')
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log('parsed json', json);
      }).catch(function(ex) {
        console.log('parsing failed', ex);
      });

    this.setState({data: data});
  }


  render() {
    let data = this.state.data;
    return (
      <div>
      </div>);
  }
}
