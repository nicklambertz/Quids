import React, { useState } from "react";

const QuestionClickPoints = ({ question, image, correctArea, audioSrc }) => {
  const [clickPosition, setClickPosition] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleImageClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const isWithinCorrectArea =
      x >= correctArea.x &&
      x <= correctArea.x + correctArea.width &&
      y >= correctArea.y &&
      y <= correctArea.y + correctArea.height;

    setClickPosition({ x, y });
    setIsCorrect(isWithinCorrectArea);
  };

  const resetClick = () => {
    setClickPosition(null);
    setIsCorrect(null);
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
      <div className="question-click-point_image-container">
        <img
          src={image}
          alt="quiz-image"
          className="question-click-point_quiz-image"
          onClick={handleImageClick}
        />
        {clickPosition && (
          <div
            className="question-click-point_click-marker"
            style={{
              top: clickPosition.y,
              left: clickPosition.x,
            }}
          >
            <img
              src={isCorrect ? "assets/img/check.png" : "assets/img/false.png"}
              alt={isCorrect ? "Correct" : "Incorrect"}
            />
          </div>
        )}
      </div>
      {clickPosition && (
        <button
          onClick={resetClick}
          className="question-click-point_reset-button"
        >
          <img
            src="assets/img/revert.png"
            alt="Revert selection"
            className="question-click-point_reset-button-icon"
          />
        </button>
      )}
    </div>
  );
};

export default QuestionClickPoints;
