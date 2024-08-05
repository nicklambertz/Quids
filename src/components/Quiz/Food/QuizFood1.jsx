import React, { useState } from "react";
import QuestionSelectMultiple from "../QuestionSelectMultiple";
import PageWrapper from "../../PageWrapper";

const QuizFood1 = () => {
  const question =
    "Welche Lebensmittel gehören zu einem ausgewogenen Frühstück?";
  const answers = [
    { imgSrc: "./assets/img/Apfel.png", text: "Apfel", color: "#87CEFA" },
    { imgSrc: "./assets/img/Banane.png", text: "Banane", color: "#FFA07A" },
    { imgSrc: "./assets/img/Vollkornbrot.png", text: "Brot", color: "#98FB98" },
    {
      imgSrc: "./assets/img/Schokolade.png",
      text: "Schokolade",
      color: "#EEE8AA",
    },
  ];
  const correctAnswersIndices = [0, 1, 2];
  const audioSrc = "assets/audio/1. Ein Gesundes Frühstück Gestalten.mp3";
  const tip = "Zum Frühstück sollte man Dinge essen, die satt machen";
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
