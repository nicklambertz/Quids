import React, { useState } from "react";
import QuestionSelect from "../QuestionSelect";
import PageWrapper from "../../PageWrapper";

const QuizGeneral2 = () => {
  const question = "Welche Aktivität hilft dir besser zu schlafen?";
  const answers = [
    { imgSrc: "./assets/img/Fernseher.png", text: "Fernsehen", color: "#87CEFA" },
    { imgSrc: "./assets/img/Buch.png", text: "Buch lesen", color: "#FFA07A" },
    { imgSrc: "./assets/img/iPad.png", text: "iPad", color: "#98FB98" },
    { imgSrc: "./assets/img/Süßigkeiten.png", text: "Süßigkeiten", color: "#EEE8AA" },
  ];
  const correctAnswerIndex = 1;
  const audioSrc = "/assets/audio/11. Schlafrituale für bessere Nächte.mp3";
  const tip = "Lesen ist immer gut!";
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
