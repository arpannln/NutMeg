import React, { Component } from 'react';


export default class Home extends Component {
  constructor() {
    super();
    this.state = { countries: {} };
  }

  componentDidMount() {
    let that = this;

    async function fetchCountries () {
      console.log(that.props);
       let response = await fetch(`https://api.sportdeer.com/v1/countries?access_token=${that.props.accessCode}`);
       let countries = await response.json();

       that.setState({ countries: countries.docs });
    }

    fetchCountries();
  }


  render() {
    let countries =  this.state.countries;
    return (
      <div>
      </div>);
  }
}
