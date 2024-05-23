import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import QuizMain from "./components/QuizMain";

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
        </div>
      </React.Fragment>
    );
  }
}

export default App;
