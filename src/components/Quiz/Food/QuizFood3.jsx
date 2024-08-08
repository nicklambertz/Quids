import React from "react";
import QuestionDragAndDrop from "../QuestionDragAndDrop";
import PageWrapper from "../../PageWrapper";

const QuizFood3 = () => {
  const question = "Welches Lebensmittel ist reich an welchen Vitaminen?";
  const dropBoxImages = [
    { imgSrc: "./assets/img/Vitamin A.png", width: "px", color: "#87CEFA" },
    { imgSrc: "./assets/img/Vitamin B.png", width: "px", color: "#FFA07A" },
    { imgSrc: "./assets/img/Vitamin C.png", width: "px", color: "#98FB98" },
  ];
  const answerImages = [
    { id: 0, src: "./assets/img/Orange.png", width: "px" },
    { id: 1, src: "./assets/img/karotten.png", width: "px" },
    { id: 2, src: "./assets/img/Eier.png", width: "px" },
  ];
  const correctIndices = [1, 2, 0];
  const audioSrc = "assets/audio/3. Vitamine in Lebensmitteln erklärt.mp3";
  const tip =
    "Gemüse hat Vitamin A, tierische Produkte Vitamin B und Obst Vitamin C";
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
