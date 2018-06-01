import React from "react";

class LeagueHome extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log(props.match.params.LeagueId);
  }

  render() {
    return (
      <div>
        Gottem
      </div>
    );
  }
}

export default LeagueHome;
