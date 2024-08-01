import React, { useState } from "react";
import QuestionSelectMultiple from "../QuestionSelectMultiple";
import PageWrapper from "../../PageWrapper";

const QuizFood1 = () => {
  const question = "Welche Lebensmittel gehören ...?";
  const answers = [
    { imgSrc: "./assets/img/avatar1.jpg", text: "Kuckuck", color: "#87CEFA" },
    { imgSrc: "./assets/img/settings.png", text: "Amsel", color: "#FFA07A" },
    { imgSrc: "./assets/img/trash.png", text: "Buntspecht", color: "#98FB98" },
    { imgSrc: "./assets/img/volumen.png", text: "Taube", color: "#EEE8AA" },
  ];
  const correctAnswersIndices = [1];
  const audioSrc = "/assets/audio/question-example.mp3";
  const tip = "Der Vogel hat einen blauen Kopf";
  const skipLink = "/nahrung2";
  const nextQuestionLink = "/nahrung2";

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

export default QuizFood1;
