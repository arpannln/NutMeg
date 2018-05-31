import React, { Component } from 'react';
import '../App.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = { countries: {} };
  }

  componentDidMount() {
    let that = this;

    async function fetchCountries () {
       let response = await fetch(`https://api.sportdeer.com/v1/countries?access_token=${that.props.accessCode}`);
       let countries = await response.json();

       that.setState({ countries: countries.docs });
    }

    fetchCountries();
  }

  render() {
    let countries =  Array.from(this.state.countries);
    return (
      <div>
        {
          countries.map( (country) => (
              <div key={country.id}>
                <h1> {country.name} </h1>
                <img src={country.square_flag}/>
              </div>
            ))
        }
      </div>);
  }
}
