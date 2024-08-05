import React, { useState } from "react";
import QuestionDragAndDrop from "../QuestionDragAndDrop";
import PageWrapper from "../../PageWrapper";

const QuizGeneral3 = () => {
  const question = "Ordne die Jahreszeiten in die richtige Reihenfolge ein!";
  const dropBoxImages = [
    "./assets/img/Nummer 1.png",
    "./assets/img/Nummer 2.png",
    "./assets/img/Nummer 3.png",
    "./assets/img/Nummer 4.png",
  ];
  const answerImages = [
    { id: 0, src: "./assets/img/Winter.png", text: "Winter"},
    { id: 1, src: "./assets/img/Herbst.png", text: "Herbst"},
    { id: 2, src: "./assets/img/Sommer.png", Text: "Sommer"},
    { id: 3, src: "./assets/img/Frühling.png", text: "Frühling"},
  ];
  const correctIndices = [3, 2, 1, 0];
  const audioSrc = "assets/audio/12. Die Jahreszeiten richtig einordnen.mp3";
  const tip = "Es beginnt mit dem Frühling";
  const skipLink = "/";
  const nextQuestionLink = "/";

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

export default QuizGeneral3;
