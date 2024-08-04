import React, { useState } from "react";
import QuestionClickPoints from "../QuestionClickPoint";
import QuestionDragAndDrop from "../QuestionDragAndDrop";
import PageWrapper from "../../PageWrapper";

const QuizFood3 = () => {
  const question = "Ziehe die Gegenstände in die richtige Tonne";
  const dropBoxImages = [
    "./assets/img/trash.png",
    "./assets/img/trash.png",
    "./assets/img/trash.png",
    "./assets/img/trash.png",
  ];
  const answerImages = [
    { id: 0, src: "./assets/img/numbers.png" },
    { id: 1, src: "./assets/img/lion.png" },
    { id: 2, src: "./assets/img/settings.png" },
    { id: 3, src: "./assets/img/settings.png" },
  ];
  const correctIndices = [0, 1, 2, 3];
  const audioSrc = "assets/audio/question-audio.mp3";
  const tip = "Denke an die Regeln der Mülltrennung";
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
