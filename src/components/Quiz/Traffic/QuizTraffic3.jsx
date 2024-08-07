import React from "react";
import QuestionSelectMultiple from "../QuestionSelectMultiple";
import PageWrapper from "../../PageWrapper";

const QuizTraffic3 = () => {
  const question = "Bei welchem Schild musst du vor dem überqueren der Straße erst genau gucken?";
  const answers = [
    { imgSrc: "./assets/img/Stop.png", color: "#87CEFA"},
    { imgSrc: "./assets/img/Vorfahrt 2.png", color: "#FFA07A"},
    { imgSrc: "./assets/img/Vortfahrt.png", color: "#98FB98"},
    { imgSrc: "./assets/img/Vortfahrt gewaehren.png", color: "#EEE8AA"},
  ];
  const correctAnswersIndices = [0, 3];
  const audioSrc = "/assets/audio/6. Acht auf Verkehrsschilder!.mp3";
  const tip = "Meistens muss man genau gucken wenn die Schilder Rot und Weiß sind!";
  const skipLink = "/tiere1";
  const nextQuestionLink = "/tiere1";

  return (
    <>
      <PageWrapper background="url('./assets/img/Road.png')">
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

export default QuizTraffic3;
