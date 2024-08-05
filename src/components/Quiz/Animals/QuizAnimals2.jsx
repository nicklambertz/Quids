import React, { useState } from "react";
import QuestionSelect from "../QuestionSelect";
import PageWrapper from "../../PageWrapper";

const QuizAnimals2 = () => {
  const question = "Welches dieser Tiere kommt aus Asien?";
  const answers = [
    { imgSrc: "./assets/img/pinguin.png", text: "Pinguin", color: "#87CEFA" },
    { imgSrc: "./assets/img/capybara 1.png", text: "Capybara", color: "#FFA07A" },
    { imgSrc: "./assets/img/Löwe.png", text: "Löwe", color: "#98FB98" },
    { imgSrc: "./assets/img/Panda.png", text: "Panda", color: "#EEE8AA" },
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
