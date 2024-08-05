import React, { useState } from "react";
import QuestionSelectMultiple from "../QuestionSelectMultiple";
import PageWrapper from "../../PageWrapper";

const QuizFood2 = () => {
  const question = "Welche Snacks sind gesund?";
  const answers = [
    { imgSrc: "./assets/img/chips.png", text: "Chips", color: "#87CEFA" },
    { imgSrc: "./assets/img/karotten.png", text: "Karotten", color: "#FFA07A" },
    { imgSrc: "./assets/img/Erdbeer.png", text: "Erdbeeren", color: "#98FB98" },
    {
      imgSrc: "./assets/img/Eis.png",
      text: "Eis",
      color: "#EEE8AA",
    },
  ];
  const correctAnswersIndices = [1, 2];
  const audioSrc = "/assets/audio/2. Gesunde Snacks.mp3";
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
