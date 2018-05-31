import React from "react";
import Carousel from "react-slick";
import imageEPL from "../../../assets/img/EPL.jpg";
import imageLaLiga from "../../../assets/img/LaLiga.jpeg";
import image3 from "assets/img/bg3.jpg";
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
      autoplay: false
    };
    return (
        <Carousel {...settings}>
          <div>
            <img
              src={imageEPL}
              alt="First slide"
              className="slick-image"
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
              alt="Second slide"
              className="slick-image"
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
              src={image3}
              alt="Third slide"
              className="slick-image"
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
