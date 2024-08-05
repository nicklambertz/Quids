import React from "react";
import QuestionTimeClick from "../QuestionTimeClick";
import PageWrapper from "../../PageWrapper";

const QuizTraffic2 = () => {
  const question = "Klicke auf die Ampel, wenn du über die Straße gehen darfst";
  const images = [
    "./assets/img/traffic-light-red.png",
    "./assets/img/traffic-light-yellow.png",
    "./assets/img/traffic-light-green.png",
  ];
  const interval = 1500;
  const correctImageIndex = 2; //Index beginnt bei 0
  const audioSrc = "/assets/audio/5. Sicher überqueren_ Ampelregeln.mp3";
  const tip = "Du darfst gehen, wenn die Ampel grün ist";
  const skipLink = "/verkehr3";
  const nextQuestionLink = "/verkehr3";
  return (
    <>
      <PageWrapper background="url('./assets/img/Road.png')">
        <QuestionTimeClick
          question={question}
          images={images}
          interval={interval}
          correctImageIndex={correctImageIndex}
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
