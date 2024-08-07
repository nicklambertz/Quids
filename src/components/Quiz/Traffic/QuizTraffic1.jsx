import React, { useState } from "react";
import QuestionSelect from "../QuestionSelect";
import PageWrapper from "../../PageWrapper";

const QuizTraffic1 = () => {
  const question = "Was solltest du immer tragen, wenn du Fahrrad fährst?";
  const answers = [
    {
      imgSrc: "./assets/img/Fahrradhelm.png",
      width: "px",
      text: "Fahrradhelm",
      color: "#87CEFA",
    },
    {
      imgSrc: "./assets/img/Zauberhut.png",
      width: "px",
      text: "Zauberhut",
      color: "#FFA07A",
    },
    {
      imgSrc: "./assets/img/Weihnachtsmütze.png",
      width: "px",
      text: "Mütze",
      color: "#98FB98",
    },
  ];
  const correctAnswerIndex = 0;
  const audioSrc = "/assets/audio/4. Sicher unterwegs_ Fahrradhelm tragen!.mp3";
  const tip = "Was bietet dir Sicherheit?";
  const skipLink = "/verkehr2";
  const nextQuestionLink = "/verkehr2";
  return (
    <>
      <PageWrapper background="url('./assets/img/Road.png')">
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

export default QuizTraffic1;
