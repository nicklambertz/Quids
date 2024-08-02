import React, { useState } from "react";
import QuestionSelectMultiple from "../QuestionSelectMultiple";
import PageWrapper from "../../PageWrapper";

const QuizFood2 = () => {
  const question = "Welche Snacks sind gesund?";
  const answers = [
    { imgSrc: "./assets/img/avatar1.jpg", text: "Chips", color: "#87CEFA" },
    { imgSrc: "./assets/img/settings.png", text: "Orangen", color: "#FFA07A" },
    { imgSrc: "./assets/img/trash.png", text: "Karotten", color: "#98FB98" },
    {
      imgSrc: "./assets/img/volumen.png",
      text: "Eis",
      color: "#EEE8AA",
    },
  ];
  const correctAnswersIndices = [1, 2];
  const audioSrc = "/assets/audio/question-example.mp3";
  const tip = "Obst und Gemüse sind gesunde und leckere Snacks";
  const skipLink = "/nahrung3";
  const nextQuestionLink = "/nahrung3";

  return (
    <>
      <PageWrapper background="url('./assets/img/background1.jpeg')">
        <QuestionSelectMultiple
          question={question}
          answers={answers}
          correctAnswersIndices={correctAnswersIndices}
          audioSrc={audioSrc}
          tip={tip}
          skipLink={skipLink}
          nextQuestionLink={nextQuestionLink}
        />
      </PageWrapper>
    </>
  );
};

export default QuizFood2;
