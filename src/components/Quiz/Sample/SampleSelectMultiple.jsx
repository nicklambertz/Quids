import React from "react";
import QuestionSelectMultiple from "./QuestionSelectMultiple";
import PageWrapper from "../../PageWrapper";

const QuizTraffic2 = () => {
  const question = "Welcher Vogel legt seine Eier in fremde Nester?";
  const answers = [
    { imgSrc: "./assets/img/avatar1.jpg", text: "Kuckuck", color: "#87CEFA" },
    { imgSrc: "./assets/img/settings.png", text: "Amsel", color: "#FFA07A" },
    { imgSrc: "./assets/img/trash.png", text: "Buntspecht", color: "#98FB98" },
    { imgSrc: "./assets/img/volumen.png", text: "Taube", color: "#EEE8AA" },
  ];
  const correctAnswersIndices = [1];
  const audioSrc = "/assets/audio/question-example.mp3";
  const tip = "Der Vogel hat einen blauen Kopf";
  const skipLink = "/verkehr";
  const nextQuestionLink = "/nahrung1";

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

export default QuizTraffic2;
