import React, { useState } from "react";

const QuestionSelect = ({ question, answers, audioSrc }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
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
    </div>
  );
};

export default QuestionSelect;
