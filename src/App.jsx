import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PointOverview from "./components/Points/PointOverview";
import QuizTraffic from "./components/Quiz/QuizTraffic";
import QuizFood from "./components/Quiz/QuizFood";
import QuizTrash from "./components/Quiz/QuizTrash";

const App = () => {
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
