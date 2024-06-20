import React, { Component } from "react";

class PointScore extends Component {
  state = {};
  render() {
    return (
      <div className="score-container">
        <div className="score-text">Deine Punkte:</div>
        <div className="score-value">100</div> {/*Variable hinzufügen*/}
      </div>
    );
  }
}

export default PointScore;
