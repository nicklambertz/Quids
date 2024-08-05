import React, { useState } from "react";
import QuestionDragAndDrop from "../QuestionDragAndDrop";
import PageWrapper from "../../PageWrapper";

const QuizGeneral1 = () => {
  const question = "Trenne den Müll in die richtige Tonne!";
  const dropBoxImages = [
    "./assets/img/Gelbe Tonne.png",
    "./assets/img/Bio Tonne.png",
    "./assets/img/Blaue Tonne.png",
  ];
  const answerImages = [
    { id: 0, src: "./assets/img/Plastikflasche.png", },
    { id: 1, src: "./assets/img/Zeitung.png" },
    { id: 2, src: "./assets/img/Bananenschale.png" },
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
