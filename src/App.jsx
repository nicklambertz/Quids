import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import QuizMain from "./components/QuizMain";
import PointScore from "./components/PointScore";
import ProgressBar from "./components/ProgressBar";
import QuestionSelect from "./components/QuestionSelect";

const App = () => {
  const question = "Welcher Vogel legt seine Eier in fremde Nester?";
  const answers = [
    { imgSrc: "assets/img/avatar1.jpg", text: "Kuckuck" },
    { imgSrc: "assets/img/settings.png", text: "Amsel" },
    { imgSrc: "assets/img/trash.png", text: "Buntspecht" },
    { imgSrc: "assets/img/volumen.png", text: "Taube" },
  ];
  const audioSrc = "/assets/audio/question-example.mp3";

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
        <div>
          <QuestionSelect
            question={question}
            answers={answers}
            audioSrc={audioSrc}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
