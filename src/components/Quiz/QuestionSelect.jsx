import React, { useState } from "react";
import Banner from "./Banner";

const QuestionSelect = ({
  question,
  answers,
  correctAnswerIndex,
  audioSrc,
  tip,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [bannerMessage, setBannerMessage] = useState("");

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
    const isAnswerCorrect = index === correctAnswerIndex;
    handleAnswer(isAnswerCorrect);
  };

  const handleAnswer = (isAnswerCorrect) => {
    if (isAnswerCorrect) {
      setBannerMessage("Richtig! Gut gemacht!");
      setIsCorrect(true);
    } else {
      setBannerMessage("Oh nein, das war leider falsch. \nTipp: " + tip);
      setIsCorrect(false);
    }
    setShowBanner(true);
    setTimeout(() => setShowBanner(false), 5000); // Banner nach 5 Sekunden ausblenden
  };

  const playAudio = () => {
    const audio = new Audio(audioSrc);
    audio.play();
  };

  return (
    <div className="question-container">
      <h1 className="question">{question}</h1>
      <div className="audio-container" onClick={playAudio}>
        <img
          src="assets/img/volumen.png"
          alt="Play audio"
          className="speaker-icon"
        />
      </div>
      <div className="answers">
        {answers.map((answer, index) => (
          <div
            key={index}
            className={`answer ${selectedAnswer === index ? "selected" : ""}`}
            onClick={() => handleAnswerClick(index)}
          >
            <img
              src={answer.imgSrc}
              alt={answer.text}
              className="answer-image"
            />
            <span className="answer-text">{answer.text}</span>
          </div>
        ))}
      </div>
      <button className="skip-button">
        <img
          src="assets/img/arrow.png"
          alt="Skip question"
          className="skip-icon"
        />
      </button>
      {showBanner && <Banner message={bannerMessage} isCorrect={isCorrect} />}
    </div>
  );
};

export default QuestionSelect;
