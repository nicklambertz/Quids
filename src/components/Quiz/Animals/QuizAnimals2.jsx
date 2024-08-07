import React, { useState } from "react";
import QuestionSelect from "../QuestionSelect";
import PageWrapper from "../../PageWrapper";

const QuizAnimals2 = () => {
  const question = "Welches dieser Tiere kommt aus Asien?";
  const answers = [
    {
      imgSrc: "./assets/img/pinguin.png",
      width: "70px",
      text: "Pinguin",
      color: "#87CEFA",
    },
    {
      imgSrc: "./assets/img/capybara 1.png",
      width: "140px",
      text: "Capybara",
      color: "#FFA07A",
    },
    {
      imgSrc: "./assets/img/Löwe.png",
      width: "70px",
      text: "Löwe",
      color: "#98FB98",
    },
    {
      imgSrc: "./assets/img/Panda.png",
      width: "90px",
      text: "Panda",
      color: "#EEE8AA",
    },
  ];
  const correctAnswerIndex = 3;
  const audioSrc = "/assets/audio/8. Asiatische Tiere entdecken.mp3";
  const tip = "Der Vogel hat einen blauen Kopf";
  const skipLink = "/tiere3";
  const nextQuestionLink = "/tiere3";
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

export default QuizAnimals2;
