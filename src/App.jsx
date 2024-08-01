import React, { Component } from "react";
import { Route, Router, Routes } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";
import Home from "./components/Home";
import Animals from "./components/Categories/Animals";
import Traffic from "./components/Categories/Traffic";
import Food from "./components/Categories/Food";
import Trash from "./components/Categories/Trash";
import Night from "./components/Categories/Night";
import PointOverview from "./components/Points/PointOverview";
import Settings from "./components/Settings/Settings";
import QuizTraffic1 from "./components/Quiz/Traffic/QuizTraffic1";
import QuizTraffic2 from "./components/Quiz/Traffic/QuizTraffic2";
import QuizFood1 from "./components/Quiz/Food/QuizFood1";
import QuizFood2 from "./components/Quiz/Food/QuizFood2";
import QuizTrash1 from "./components/Quiz/Trash/QuizTrash1";
import QuizAnimals1 from "./components/Quiz/Animals/QuizAnimals1";
import QuizAnimals2 from "./components/Quiz/Animals/QuizAnimals2";
import QuizNight1 from "./components/Quiz/Night/QuizNight1";
import QuizNight2 from "./components/Quiz/Night/QuizNight2";
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
          <Route path="/" element={<Home />} />
          <Route path="punkte" element={<PointOverview />} />
          <Route path="einstellungen" element={<Settings />} />

          <Route path="nahrung" element={<Food />} />
          <Route path="nahrung1" element={<QuizFood1 />} />
          <Route path="nahrung2" element={<QuizFood2 />} />

          <Route path="verkehr" element={<Traffic />} />
          <Route path="verkehr1" element={<QuizTraffic1 />} />
          <Route path="verkehr2" element={<QuizTraffic2 />} />

          <Route path="muell" element={<Trash />} />
          <Route path="muell1" element={<QuizTrash1 />} />

          <Route path="tiere" element={<Animals />} />
          <Route path="tiere1" element={<QuizAnimals1 />} />
          <Route path="tiere2" element={<QuizAnimals2 />} />

          <Route path="nacht" element={<Night />} />
          <Route path="nacht1" element={<QuizNight1 />} />
          <Route path="nacht2" element={<QuizNight2 />} />
        </Routes>
      </MusicProvider>
    </>
  );
};

export default App;
