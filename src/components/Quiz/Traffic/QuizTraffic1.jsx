import React, { useState } from "react";
import QuestionSelect from "../QuestionSelect";

const QuizTraffic1 = () => {
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
  const skipLink = "/verkehr";
  const nextQuestionLink = "/nahrung1";
  return (
    <>
      <QuestionSelect
        question={question}
        answers={answers}
        correctAnswerIndex={correctAnswerIndex}
        audioSrc={audioSrc}
        tip={tip}
        skipLink={skipLink}
        nextQuestionLink={nextQuestionLink}
      />
    </>
  );
};

export default QuizTraffic1;
