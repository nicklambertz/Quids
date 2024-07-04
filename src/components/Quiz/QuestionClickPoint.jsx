import React, { useState } from "react";
import Banner from "./Banner";

const QuestionClickPoints = ({
  question,
  image,
  correctArea,
  audioSrc,
  tip,
}) => {
  const [clickPosition, setClickPosition] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const [bannerMessage, setBannerMessage] = useState("");

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

    if (isWithinCorrectArea) {
      setBannerMessage("Richtig! Gut gemacht!");
    } else {
      setBannerMessage("Oh nein, das war leider falsch.\nTipp: " + tip);
    }

    setShowBanner(true);
    setTimeout(() => setShowBanner(false), 5000); // Banner nach 5 Sekunden ausblenden
  };

  const resetClick = () => {
    setClickPosition(null);
    setIsCorrect(null);
    setShowBanner(false);
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
      {showBanner && <Banner message={bannerMessage} isCorrect={isCorrect} />}
    </div>
  );
};

export default QuestionClickPoints;
