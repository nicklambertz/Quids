import React from "react";
import QuestionSelectMultiple from "../QuestionSelectMultiple";

const QuizTraffic2 = () => {
  const question = "Welcher Vogel legt seine Eier in fremde Nester?";
  const answers = [
    { imgSrc: "./assets/img/avatar1.jpg", text: "Kuckuck" },
    { imgSrc: "./assets/img/settings.png", text: "Amsel" },
    { imgSrc: "./assets/img/trash.png", text: "Buntspecht" },
    { imgSrc: "./assets/img/volumen.png", text: "Taube" },
  ];
  const correctAnswersIndices = [1];
  const audioSrc = "/assets/audio/question-example.mp3";
  const tip = "Der Vogel hat einen blauen Kopf";
  const skipLink = "/verkehr";
  const nextQuestionLink = "/nahrung1";

  return (
    <>
      <QuestionSelectMultiple
        question={question}
        answers={answers}
        correctAnswersIndices={correctAnswersIndices}
        audioSrc={audioSrc}
        tip={tip}
        skipLink={skipLink}
        nextQuestionLink={nextQuestionLink}
      />
    </>
  );
};

export default QuizTraffic2;
