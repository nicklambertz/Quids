import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import QuizMain from "./components/Home";
import PointOverview from "./components/Points/PointOverview";
import QuizTraffic from "./components/Quiz/QuizTraffic";
import QuizFood from "./components/Quiz/QuizFood";
import QuizTrash from "./components/Quiz/QuizTrash";
import Home from "./components/Home";

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
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="verkehr" element={<QuizTraffic />} />
        <Route path="nahrung" element={<QuizFood />} />
        <Route path="müll" element={<QuizTrash />} />
        <Route path="punkte" element={<PointOverview />} />
      </Routes>
    </>
  );
};

export default App;
