import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import NutMeg from "views/NutMeg/NutMeg.jsx";
import LeagueHome from "views/NutMeg/Sections/LeagueHome/LeagueHome.jsx";

//be careful about how these are ordered (it is a switch statement under the hood)
var indexRoutes = [
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/soccer-app/:LeagueId", name: "LeagueHome", component: LeagueHome },
  { path: "/soccer-app", name: "NutMeg", component: NutMeg },
  { path: "/", name: "Components", component: Components }

];

export default indexRoutes;
