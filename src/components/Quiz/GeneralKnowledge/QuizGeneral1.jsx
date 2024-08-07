import React, { useState } from "react";
import QuestionDragAndDrop from "../QuestionDragAndDrop";
import PageWrapper from "../../PageWrapper";

const QuizGeneral1 = () => {
  const question = "Trenne den Müll in die richtige Tonne!";
  const dropBoxImages = [
    {
      imgSrc: "./assets/img/Gelbe Tonne.png",
      width: "100px",
      color: "#87CEFA",
    },
    { imgSrc: "./assets/img/Bio Tonne.png", width: "100px", color: "#FFA07A" },
    {
      imgSrc: "./assets/img/Blaue Tonne.png",
      width: "100px",
      color: "#98FB98",
    },
  ];
  const answerImages = [
    { id: 0, src: "./assets/img/Plastikflasche.png", width: "100px" },
    { id: 1, src: "./assets/img/Zeitung.png", width: "px" },
    { id: 2, src: "./assets/img/Bananenschale.png", width: "px" },
  ];
  const correctIndices = [0, 2, 1];
  const audioSrc = "assets/audio/10. Mülltrennung nach dem Zoo-Besuch.mp3";
  const tip = "Denke an die Regeln der Mülltrennung";
  const skipLink = "/allgemein2";
  const nextQuestionLink = "/allgemein2";

  return (
    <PageWrapper background="url('./assets/img/background1.jpeg')">
      <QuestionDragAndDrop
        question={question}
        dropBoxImages={dropBoxImages}
        answerImages={answerImages}
        correctIndices={correctIndices}
        audioSrc={audioSrc}
        tip={tip}
        skipLink={skipLink}
        nextQuestionLink={nextQuestionLink}
      />
    </PageWrapper>
  );
};

export default QuizGeneral1;
