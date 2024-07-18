import React, { useState } from "react";
import QuestionTimeClick from "./QuestionTimeClick";

const QuizTrash = () => {
  const question = "Klicke auf die Ampel, wenn du über die Straße gehen darfst";
  const images = [
    "./assets/img/traffic-light-red.png",
    "./assets/img/traffic-light-yellow.png",
    "./assets/img/traffic-light-green.png",
  ];
  const interval = 1500;
  const correctImageIndex = 2; //Index beginnt bei 0
  const audioSrc = "/assets/audio/question-example.mp3";
  const tip = "Du darfst gehen, wenn die Ampel grün ist";
  const skipLink = "/muell";
  return (
    <>
      <QuestionTimeClick
        question={question}
        images={images}
        interval={interval}
        correctImageIndex={correctImageIndex}
        audioSrc={audioSrc}
        tip={tip}
        skipLink={skipLink}
      />
    </>
  );
};

export default QuizTrash;
