import React, { useState } from "react";
import QuestionDragAndDrop from "../QuestionDragAndDrop";
import PageWrapper from "../../PageWrapper";

const QuizAnimals3 = () => {
  const question = "Ordne die Tiere in die richtigen Lebensräume ein!";
  const dropBoxImages = [
    { imgSrc: "./assets/img/Afrika.png", width: "px", color: "#87CEFA" },
    { imgSrc: "./assets/img/Antarktis.png", width: "px", color: "#FFA07A" },
  ];
  const answerImages = [
    { id: 0, src: "./assets/img/pinguin.png", width: "100px" },
    { id: 1, src: "./assets/img/Elefant.png", width: "px" },
  ];
  const correctIndices = [1, 0];
  const audioSrc = "assets/audio/9. Tiere und ihre Lebensräume entdecken.mp3";
  const tip = "Versuche es noch ein Mal!";
  const skipLink = "/allgemein1";
  const nextQuestionLink = "/allgemein1";

  return (
    <PageWrapper background="url('./assets/img/Gehege 2.png')">
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

export default QuizAnimals3;
