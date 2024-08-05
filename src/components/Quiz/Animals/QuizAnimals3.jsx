import React, { useState } from "react";
import QuestionDragAndDrop from "../QuestionDragAndDrop";
import PageWrapper from "../../PageWrapper";

const QuizAnimals3 = () => {
  const question = "Ordne die Tiere in die richtigen Lebensräume ein!";
  const dropBoxImages = [
    "./assets/img/Afrika.png",
    "./assets/img/Antarktis.png",
  ];
  const answerImages = [
    { id: 0, src: "./assets/img/pinguin.png" },
    { id: 1, src: "./assets/img/Elefant.png" },
  ];
  const correctIndices = [1, 0];
  const audioSrc = "assets/audio/9. Tiere und ihre Lebensräume entdecken.mp3";
  const tip = "Denke an die Regeln der Mülltrennung";
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
