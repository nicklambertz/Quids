import React, { Component } from "react";
import { Route, Router, Routes } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";
import Home from "./components/Home";
import Animals from "./components/Categories/Animals";
import Traffic from "./components/Categories/Traffic";
import Food from "./components/Categories/Food";
import GeneralKnowledge from "./components/Categories/GeneralKnowledge";
import PointOverview from "./components/Points/PointOverview";
import Settings from "./components/Settings/Settings";
import QuizTraffic1 from "./components/Quiz/Traffic/QuizTraffic1";
import QuizTraffic2 from "./components/Quiz/Traffic/QuizTraffic2";
import QuizTraffic3 from "./components/Quiz/Traffic/QuizTraffic3";
import QuizFood1 from "./components/Quiz/Food/QuizFood1";
import QuizFood2 from "./components/Quiz/Food/QuizFood2";
import QuizFood3 from "./components/Quiz/Food/QuizFood3";
import QuizAnimals1 from "./components/Quiz/Animals/QuizAnimals1";
import QuizAnimals2 from "./components/Quiz/Animals/QuizAnimals2";
import QuizAnimals3 from "./components/Quiz/Animals/QuizAnimals3";
import QuizGeneral1 from "./components/Quiz/GeneralKnowledge/QuizGeneral1";
import QuizGeneral2 from "./components/Quiz/GeneralKnowledge/QuizGeneral2";
import QuizGeneral3 from "./components/Quiz/GeneralKnowledge/QuizGeneral3";
import BackgroundMusic from "./components/Settings/BackgroundMusic";
import { MusicProvider } from "./components/Settings/MusicContext";

const App = () => {
  return (
    <>
      <MusicProvider>
        <BackgroundMusic />
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="login" element={<LogIn />} />

          <Route path="punkte" element={<PointOverview />} />
          <Route path="einstellungen" element={<Settings />} />

          <Route path="/" element={<Food />} />
          <Route path="nahrung1" element={<QuizFood1 />} />
          <Route path="nahrung2" element={<QuizFood2 />} />
          <Route path="nahrung3" element={<QuizFood3 />} />

          <Route path="verkehr" element={<Traffic />} />
          <Route path="verkehr1" element={<QuizTraffic1 />} />
          <Route path="verkehr2" element={<QuizTraffic2 />} />
          <Route path="verkehr3" element={<QuizTraffic3 />} />

          <Route path="tiere" element={<Animals />} />
          <Route path="tiere1" element={<QuizAnimals1 />} />
          <Route path="tiere2" element={<QuizAnimals2 />} />
          <Route path="tiere3" element={<QuizAnimals3 />} />

          <Route path="allgemein" element={<GeneralKnowledge />} />
          <Route path="allgemein1" element={<QuizGeneral1 />} />
          <Route path="allgemein2" element={<QuizGeneral2 />} />
          <Route path="allgemein3" element={<QuizGeneral3 />} />
        </Routes>
      </MusicProvider>
    </>
  );
};

export default App;
