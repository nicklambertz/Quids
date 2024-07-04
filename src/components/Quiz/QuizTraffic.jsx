import React, { useState } from "react";
import QuestionSelect from "./QuestionSelect";

const QuizTraffic = () => {
  const question = "Welcher Vogel legt seine Eier in fremde Nester?";
  const answers = [
    { imgSrc: "./assets/img/avatar1.jpg", text: "Kuckuck" },
    { imgSrc: "./assets/img/settings.png", text: "Amsel" },
    { imgSrc: "./assets/img/trash.png", text: "Buntspecht" },
    { imgSrc: "./assets/img/volumen.png", text: "Taube" },
  ];
  const correctAnswerIndex = 0;
  const audioSrc = "/assets/audio/question-example.mp3";
  const tip = "Der Vogel hat einen blauen Kopf";
  return (
    <>
      <h1>Traffic</h1>
      <QuestionSelect
        question={question}
        answers={answers}
        correctAnswerIndex={correctAnswerIndex}
        audioSrc={audioSrc}
        tip={tip}
      />
    </>
  );
};

export default QuizTraffic;
