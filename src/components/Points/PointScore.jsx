import React, { Component } from "react";

class PointScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0, // Anfangswert für den Punktestand
    };
  }

  componentDidMount() {
    // Beim Laden der Komponente den Punktestand aus dem localStorage lesen
    const storedScore = parseInt(window.localStorage.getItem("score")) || 0;
    this.setState({ score: storedScore });
  }

  render() {
    return (
      <div className="score-container">
        <div className="score-text">Deine Punkte:</div>
        <div className="score-value">{this.state.score}</div>
      </div>
    );
  }
}

export default PointScore;
