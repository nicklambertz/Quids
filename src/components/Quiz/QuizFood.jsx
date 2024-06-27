import React, { useState } from "react";
import QuestionSelect from "./QuestionSelect";
import QuestionClickPoints from "./QuestionClickPoint";

const QuizFood = () => {
  const question = "Wo ist der linke obere Zahn von dem Monster?";
  const image = "./assets/img/avatar1.jpg";
  const correctArea = { x: 140, y: 130, width: 30, height: 20 };
  const audioSrc = "./assets/audio/question-example.mp3";
  return (
    <>
      <h1>Food</h1>
      <QuestionClickPoints
        question={question}
        image={image}
        correctArea={correctArea}
        audioSrc={audioSrc}
      />
    </>
  );
};

export default QuizFood;
