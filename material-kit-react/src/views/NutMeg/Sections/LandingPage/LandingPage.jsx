import React from "react";
import LeaguesCarousel from "./Leagues/LeaguesCarousel.jsx";
// import SectionCarousel from "../../../Components/Sections/SectionCarousel.jsx";
import { Link } from "react-router-dom";


class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <LeaguesCarousel/>

      </div>
    );
  }
}

export default LandingPage;
