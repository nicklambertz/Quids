import React, { useState } from "react";
import Banner from "./Banner";
import Header from "../Header/Header";
import { Link, useNavigate } from "react-router-dom";

const QuestionClickPoints = ({
  question,
  image,
  correctArea,
  audioSrc,
  tip,
  skipLink,
  nextQuestionLink,
}) => {
  const [clickPosition, setClickPosition] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const [bannerMessage, setBannerMessage] = useState("");
  const navigate = useNavigate();

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
      updateScore(50); // Punkte um 50 erhöhen
      setShowBanner(true);
      setTimeout(() => {
        setShowBanner(false);
        navigate("/punkte");
        setTimeout(() => {
          navigate(nextQuestionLink);
        }, 3000);
      }, 3000);
    } else {
      setBannerMessage("Oh nein, das war leider falsch.\nTipp: " + tip);
      setShowBanner(true);
      setTimeout(() => setShowBanner(false), 3000);
    }
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
        <Link to="/">
          <button className="revert-button-question">
            <img
              src="./assets/img/revert.png"
              alt="Zurück"
              className="revert-button img"
            />
          </button>
        </Link>
        <h1 className="question">{question}</h1>
        <div className="audio-container" onClick={playAudio}>
          <img
            src="assets/img/volumen.png"
            alt="Play audio"
            className="speaker-icon"
          />
        </div>
        <div
          className="question-click-point_image-wrapper"
          style={{ position: "relative", display: "inline-block" }}
        >
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
                  top: `${clickPosition.y}px`,
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
          </div>
          <div
            className="skip-button-container"
            style={{
              position: "absolute",
              top: "50%",
              right: "-0px",
              transform: "translateY(-50%)",
            }}
          >
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

        {showBanner && <Banner message={bannerMessage} isCorrect={isCorrect} />}
      </div>
    </div>
  );
};

export default QuestionClickPoints;
