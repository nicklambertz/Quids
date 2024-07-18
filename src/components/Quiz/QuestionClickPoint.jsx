import React, { useState } from "react";
import Banner from "./Banner";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const QuestionClickPoints = ({
  question,
  image,
  correctArea,
  audioSrc,
  tip,
  skipLink,
}) => {
  const [clickPosition, setClickPosition] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const [bannerMessage, setBannerMessage] = useState("");

  const updateScore = (points) => {
    const currentScore = parseInt(window.localStorage.getItem("score")) || 0;
    const newScore = currentScore + points;
    window.localStorage.setItem("score", newScore);
  };

  const handleImageClick = (e) => {
    const img = e.target;
    const rect = img.getBoundingClientRect();

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
      updateScore(25); // Punkte um 25 erhöhen
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
      <div className="container">
        <Header />
        <h1 className="question">{question}</h1>
        <div className="audio-container" onClick={playAudio}>
          <img
            src="assets/img/volumen.png"
            alt="Play audio"
            className="speaker-icon"
          />
        </div>
        <div
          className="question-click-point_image-container"
          onClick={handleImageClick}
        >
          <img
            src={image}
            alt="quiz-image"
            className="question-click-point_quiz-image"
          />
          {clickPosition && (
            <div
              className="question-click-point_click-marker"
              style={{
                top: `${clickPosition.y}px`, // Direkte Nutzung der Klickposition
                left: `${clickPosition.x}px`,
              }}
            >
              <img
                src={
                  isCorrect ? "assets/img/check.png" : "assets/img/false.png"
                }
                alt={isCorrect ? "Correct" : "Incorrect"}
              />
            </div>
          )}
          <div className="skip-button-container">
            <Link to={skipLink}>
              <button className="skip-button">
                <img
                  src="assets/img/arrow.png"
                  alt="Skip question"
                  className="skip-icon"
                />
              </button>
            </Link>
          </div>
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
    </div>
  );
};

export default QuestionClickPoints;
