import React, { useState } from "react";
import QuestionSelect from "./QuestionSelect";
import PageWrapper from "../../PageWrapper";

const QuizTraffic1 = () => {
  const question = "Welcher Vogel legt seine Eier in fremde Nester?";
  const answers = [
    { imgSrc: "./assets/img/avatar1.jpg", text: "Kuckuck", color: "#87CEFA" },
    { imgSrc: "./assets/img/settings.png", text: "Amsel", color: "#FFA07A" },
    { imgSrc: "./assets/img/trash.png", text: "Buntspecht", color: "#98FB98" },
    { imgSrc: "./assets/img/volumen.png", text: "Taube", color: "#EEE8AA" },
  ];
  const correctAnswerIndex = 0;
  const audioSrc = "/assets/audio/question-example.mp3";
  const tip = "Der Vogel hat einen blauen Kopf";
  const skipLink = "/verkehr";
  const nextQuestionLink = "/nahrung1";
  return (
    <>
      <PageWrapper background="url('./assets/img/background1.jpeg')">
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
