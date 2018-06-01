import React from "react";
import Carousel from "react-slick";
import imageEPL from "../../../assets/img/EPL.jpg";
import imageLaLiga from "../../../assets/img/LaLiga.jpg";
import imageBundesliga from "../../../assets/img/Bundesliga.jpg";
import imageWorldCup from "../../../assets/img/WorldCup.jpg";
import imageHome from "../../../assets/img/Home.jpg";
import Badge from "components/Badge/Badge.jsx";
import LocationOn from "@material-ui/icons/LocationOn";

class LeaguesCarousel extends React.Component {
  constructor() {
    super();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      adaptiveHeight: true
    };
    return (
        <Carousel {...settings}>
          <div>
            <h1 className="slick-title slick-white-txt"> NutMeg
            </h1>
            <h2 className="slick-title-caption"> Breaking the Meta for Soccer Stats </h2>
            <img
              src={imageHome}
              alt="First slide"
              className="slick-hero"
            />
            <div className="slick-caption">
              <Badge color="primary">Pick your League</Badge>
            </div>
          </div>
          <div>
            <img
              src={imageWorldCup}
              alt="Second slide"
              className="slick-hero"
            />
            <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />Somewhere Beyond,
                United States
              </h4>
            </div>
          </div>
          <div>
            <img
              src={imageEPL}
              alt="Third slide"
              className="slick-hero"
            />
            <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />Yellowstone
                National Park, United States
              </h4>
            </div>
          </div>
          <div>
            <img
              src={imageLaLiga}
              alt="Fourth slide"
              className="slick-hero"
            />
            <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />Yellowstone
                National Park, United States
              </h4>
            </div>
          </div>
          <div>
            <img
              src={imageBundesliga}
              alt="Fifth slide"
              className="slick-hero"
            />
            <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />Yellowstone
                National Park, United States
              </h4>
            </div>
          </div>
      </Carousel>
    );
  }
}

export default LeaguesCarousel;
