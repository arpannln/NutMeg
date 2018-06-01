import LandingPage from "./Sections/LandingPage/LandingPage.jsx";
import React from "react";

const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YjBkZWVhMDQ2MjNjNDU3ZjBjMDA4ZDgiLCJpYXQiOjE1Mjc2Mzk3OTJ9.h6cCwvD9WU59nzjWiD1zpOHBBOggyLr1QcfzShtf3qQ';


class NutMeg extends React.Component {
  constructor() {
    super();
    this.state = { key: undefined };
  }

  componentDidMount() {
    let that = this;

    //since this is a temporary key lasting only 30 minutes, we have to update this regularly
    async function getNewKey() {
      let response = await fetch(`https://api.sportdeer.com/v1/accessToken?refresh_token=${KEY}`);
      let data = await response.json();

      that.setState({ key: data.new_access_token });
    }

    getNewKey();

    //incase the user hangs out at our page for more than 30 min
    setInterval(getNewKey, 1740000);

  }

  render() {
    let key = this.state.key;

    return key ?
    (
      <LandingPage access={key}/>
    )
    :
      <div></div>
    ;
  }
}

export default NutMeg;
