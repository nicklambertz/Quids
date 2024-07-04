import React, { useState } from "react";
import QuestionClickPoints from "./QuestionClickPoint";

const QuizFood = () => {
  const question = "Wo ist der linke obere Zahn von dem Monster?";
  const image = "./assets/img/avatar1.jpg";
  const correctArea = { x: 140, y: 130, width: 30, height: 20 };
  const audioSrc = "./assets/audio/question-example.mp3";
  const tip = "Schaue in dem Mund des Monsters nach";
  return (
    <>
      <h1>Food</h1>
      <QuestionClickPoints
        question={question}
        image={image}
        correctArea={correctArea}
        audioSrc={audioSrc}
        tip={tip}
      />
    </>
  );
};

export default QuizFood;
