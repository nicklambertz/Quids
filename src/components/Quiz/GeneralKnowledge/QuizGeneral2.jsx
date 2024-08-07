import React, { useState } from "react";
import QuestionSelect from "../QuestionSelect";
import PageWrapper from "../../PageWrapper";

const QuizGeneral2 = () => {
  const question = "Welche Aktivität hilft dir besser zu schlafen?";
  const answers = [
    {
      imgSrc: "./assets/img/Fernseher.png",
      width: "px",
      text: "Fernsehen",
      color: "#87CEFA",
    },
    {
      imgSrc: "./assets/img/Buch.png",
      width: "px",
      text: "Buch lesen",
      color: "#FFA07A",
    },
    {
      imgSrc: "./assets/img/iPad.png",
      width: "px",
      text: "iPad",
      color: "#98FB98",
    },
    {
      imgSrc: "./assets/img/Süßigkeiten.png",
      width: "px",
      text: "Süßigkeiten",
      color: "#EEE8AA",
    },
  ];
  const correctAnswerIndex = 1;
  const audioSrc = "/assets/audio/11. Schlafrituale für bessere Nächte.mp3";
  const tip = "Der Vogel hat einen blauen Kopf";
  const skipLink = "/allgemein3";
  const nextQuestionLink = "/allgemein3";
  return (
    <>
      <PageWrapper background="url('./assets/img/Schlafzimmer.png')">
        <QuestionSelect
          question={question}
          answers={answers}
          correctAnswerIndex={correctAnswerIndex}
          audioSrc={audioSrc}
          tip={tip}
          skipLink={skipLink}
          nextQuestionLink={nextQuestionLink}
        />
      </PageWrapper>
    </>
  );
};

export default QuizGeneral2;
