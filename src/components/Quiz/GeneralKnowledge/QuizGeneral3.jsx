import React, { useState } from "react";
import QuestionDragAndDrop from "../QuestionDragAndDrop";
import PageWrapper from "../../PageWrapper";

const QuizGeneral3 = () => {
  const question = "Ordne die Jahreszeiten in die richtige Reihenfolge ein!";
  const dropBoxImages = [
    { imgSrc: "./assets/img/Nummer 1.png", width: "90px", color: "#87CEFA" },
    { imgSrc: "./assets/img/Nummer 2.png", width: "90px", color: "#FFA07A" },
    { imgSrc: "./assets/img/Nummer 3.png", width: "90px", color: "#98FB98" },
    { imgSrc: "./assets/img/Nummer 4.png", width: "90px", color: "#98FB98" },
  ];
  const answerImages = [
    { id: 0, src: "./assets/img/Winter.png", text: "Winter", width: "px" },
    { id: 1, src: "./assets/img/Herbst.png", text: "Herbst", width: "px" },
    { id: 2, src: "./assets/img/Sommer.png", Text: "Sommer", width: "px" },
    { id: 3, src: "./assets/img/Frühling.png", text: "Frühling", width: "px" },
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
