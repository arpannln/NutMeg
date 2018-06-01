import React from "react";
import LeaguesCarousel from "./Leagues/LeaguesCarousel.jsx";
import LeagueHome from "../LeagueHome/LeagueHome.jsx";
// import SectionCarousel from "../../../Components/Sections/SectionCarousel.jsx";
import { Link } from "react-router-dom";


class LandingPage extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <LeaguesCarousel access={this.props.access}/>
      </div>
    );
  }
}

export default LandingPage;
