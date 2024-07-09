import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Animals from "./components/Categories/Animals";
import Traffic from "./components/Categories/Traffic";
import Food from "./components/Categories/Food";
import Trash from "./components/Categories/Trash";
import Language from "./components/Categories/Language";
import PointOverview from "./components/Points/PointOverview";
import Settings from "./components/Settings";
import QuizTraffic from "./components/Quiz/QuizTraffic";
import QuizFood from "./components/Quiz/QuizFood";
import QuizTrash from "./components/Quiz/QuizTrash";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="login" element={<LogIn />} />

        <Route path="tiere" element={<Animals />} />

        <Route path="verkehr" element={<Traffic />} />
        <Route path="verkehr1" element={<QuizTraffic />} />

        <Route path="nahrung" element={<Food />} />
        <Route path="nahrung1" element={<QuizFood />} />

        <Route path="muell" element={<Trash />} />
        <Route path="muell1" element={<QuizTrash />} />

        <Route path="sprache" element={<Language />} />

        <Route path="punkte" element={<PointOverview />} />

        <Route path="einstellungen" element={<Settings />} />
      </Routes>
    </>
  );
};

export default App;
