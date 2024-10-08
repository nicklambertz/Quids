import React, { useState } from "react";
import QuestionClickPoints from "./QuestionClickPoint";

const QuizFood = () => {
  const question = "Wo ist der linke obere Zahn von dem Monster?";
  const image = "./assets/img/avatar1.jpg";
  const correctArea = { x: 120, y: 100, width: 30, height: 30 };
  const audioSrc = "./assets/audio/question-example.mp3";
  const tip = "Schaue in dem Mund des Monsters nach";
  const skipLink = "/nahrung";
  const nextQuestionLink = "/muell1";
  return (
    <>
      <QuestionClickPoints
        question={question}
        image={image}
        correctArea={correctArea}
        audioSrc={audioSrc}
        tip={tip}
        skipLink={skipLink}
        nextQuestionLink={nextQuestionLink}
      />
    </>
  );
};

export default QuizFood;
