import React from "react";

class LeagueHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = { leagueInfo: {} };
  }

  componentDidMount() {
    let that = this;

    async function fetchLeagueInfo () {
       console.log(that.props);
       let response = await fetch(`https://api.sportdeer.com/v1/leagues/${that.props.match.params.LeagueId}?access_token=${that.props.match.params.access}`);
       let leagueInfo = await response.json();

       that.setState({ leagueInfo: leagueInfo });
    }

    fetchLeagueInfo();
  }

  render() {
    console.log(this.state);
    return (
      <div>
        Gottem
      </div>
    );
  }
}

export default LeagueHome;
