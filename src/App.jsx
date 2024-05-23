import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import QuizMain from "./components/QuizMain";
import PointScore from "./components/PointScore";
import ProgressBar from "./components/ProgressBar";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="header-container">
            <Header />
          </div>
          <div className="quiz-main">
            <QuizMain />
          </div>
          <div>
            <Navbar />
          </div>
          <div>
            <PointScore />
          </div>
          <div>
            <ProgressBar />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
