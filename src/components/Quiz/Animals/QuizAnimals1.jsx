import React, { useState } from "react";
import QuestionSelect from "../QuestionSelect";
import PageWrapper from "../../PageWrapper";

const QuizAnimals1 = () => {
  const question = "Welches dieser Tiere lebt normalerweise in der Wüste?";
  const answers = [
    {
      imgSrc: "./assets/img/capybara 1.png",
      width: "140px",
      text: "Capybara",
      color: "#87CEFA",
    },
    {
      imgSrc: "./assets/img/pinguin.png",
      width: "70px",
      text: "Pinguin",
      color: "#FFA07A",
    },
    {
      imgSrc: "./assets/img/Kamel.png",
      width: "px",
      text: "Kamel",
      color: "#98FB98",
    },
    {
      imgSrc: "./assets/img/eisbaer.png",
      width: "110px",
      text: "Eisbär",
      color: "#EEE8AA",
    },
  ];
  const correctAnswerIndex = 2;
  const audioSrc = "/assets/audio/7. Tiere der Wüste entdecken.mp3";
  const tip = "Das Tier ist dafür bekannt andere anzuspucken.";
  const skipLink = "/tiere2";
  const nextQuestionLink = "/tiere2";
  return (
    <>
      <PageWrapper background="url('./assets/img/Gehege 2.png')">
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

export default QuizAnimals1;
