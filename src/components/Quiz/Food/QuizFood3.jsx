import React, { useState } from "react";
import QuestionClickPoints from "../QuestionClickPoint";
import QuestionDragAndDrop from "../QuestionDragAndDrop";
import PageWrapper from "../../PageWrapper";

const QuizFood3 = () => {
  const question = "Welches Lebensmittel ist reich an welchen Vitaminen?";
  const dropBoxImages = [
    "./assets/img/Vitamin A.png" ,
    "./assets/img/Vitamin B.png",
    "./assets/img/Vitamin C.png",
  ];
  const answerImages = [
    { id: 0, src: "./assets/img/Orange.png" },
    { id: 1, src: "./assets/img/karotten.png" },
    { id: 2, src: "./assets/img/Eier.png" },
  ];
  const correctIndices = [1, 2, 0];
  const audioSrc = "assets/audio/3. Vitamine in Lebensmitteln erklärt.mp3";
  const tip = "Denk daran, dass Karotten gut für die Augen sind und viel Vitamin A haben, Eier ein tolles Frühstück sind und viel Vitamin B enthalten, und Orangen dich gesund halten, weil sie voller Vitamin C stecken.";
  const skipLink = "/verkehr1";
  const nextQuestionLink = "/verkehr1";

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

export default QuizFood3;
