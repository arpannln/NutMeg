import React from "react";
import Carousel from "react-slick";
import imageEPL from "../../../assets/img/EPL.jpg";
import logoEPL from "../../../assets/img/EPLLogo.jpg";
import imageLaLiga from "../../../assets/img/LaLiga.jpg";
import logoLaLiga from "../../../assets/img/LaLigaLogo.png";
import imageBundesliga from "../../../assets/img/Bundesliga.jpg";
import logoBundesliga from "../../../assets/img/BundesligaLogo.png";
import imageWorldCup from "../../../assets/img/WorldCup.jpg";
import logoWorldCup from "../../../assets/img/WorldCupLogo.png";
import imageHome from "../../../assets/img/Home.jpg";
import Info from "components/Typography/Info.jsx";
import Button from "components/CustomButtons/Button.jsx";
import {Link} from "react-router-dom";
import NavBar from "../../NavBar/NavBar.jsx";

class LeaguesCarousel extends React.Component {
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
      <div>
        <NavBar/>
        <Carousel {...settings}>
          <div>
            <h1 className="slick-title slick-white-txt"> NutMeg
            </h1>
            <h3 className="slick-title-caption slick-txt-primary"> Redefining Soccer's Online Presence </h3>
            <img
              src={imageHome}
              alt="First slide"
              className="slick-hero"
            />
            <div className="slick-caption">
              <Info>
                Pick your Destination
              </Info>
            </div>
          </div>
          <div>
            <img
              src={logoWorldCup}
              className="slick-logo absolute large">
            </img>
            <Link to={`/soccer-app/leagues/82/${this.props.access}`}>
              <Button color="success" className="absolute slick-button">World Cup</Button>
            </Link>
            <img
              src={imageWorldCup}
              alt="Second slide"
              className="slick-hero"
            />
          <div className="slick-caption">
              <h4 className="slick-txt-shadow">
                32 teams 1 cup
              </h4>
            </div>
          </div>
          <div>
            <img
              src={logoEPL}
              className="slick-logo absolute medium">
            </img>
            <Link to={`/soccer-app/leagues/8/${this.props.access}`}>
              <Button color="success" className="absolute slick-button">EPL</Button>
            </Link>
            <img
              src={imageEPL}
              alt="Third slide"
              className="slick-hero"
            />
            <div className="slick-caption">
              <h4 className="slick-txt-shadow">
                Mohammed Salah (Liverpool)
              </h4>
            </div>
          </div>
          <div>
            <img
              src={logoLaLiga}
              className="slick-logo absolute medium">
            </img>
            <Link to={`/soccer-app/leagues/129/${this.props.access}`}>
              <Button color="success" className="absolute slick-button">La Liga</Button>
            </Link>
            <img
              src={imageLaLiga}
              alt="Fourth slide"
              className="slick-hero"
            />
            <div className="slick-caption">
              <h4 className="slick-txt-shadow">
                Gareth Bale, Christiano Ronaldo (Real Madrid)
              </h4>
            </div>
          </div>
          <div>
            <img
              src={logoBundesliga}
              className="slick-logo absolute medium">
            </img>
            <Link to={`/soccer-app/leagues/108/${this.props.access}`}>
              <Button color="success" className="absolute slick-button">Bundesliga</Button>
            </Link>
            <img
              src={imageBundesliga}
              alt="Fifth slide"
              className="slick-hero"
            />
            <div className="slick-caption">
              <h4 className="slick-txt-shadow">
                Arjen Robben (Bayern Munich)
              </h4>
            </div>
          </div>
      </Carousel>
    </div>
    );
  }
}

export default LeaguesCarousel;
