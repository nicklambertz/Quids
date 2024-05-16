import React, { Component } from "react";
import Navbar from "./components/navbar";
import Header from "./components/Header";
import QuizMain from "./components/QuizMain";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="header-container">
          <Header />
        </div>
        <div className="quiz-main">
          <QuizMain />
        </div>
        <div className="navbar-container">
          <Navbar />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
