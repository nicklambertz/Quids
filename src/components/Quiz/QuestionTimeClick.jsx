import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import Header from "../Header/Header";
import { Link, useNavigate } from "react-router-dom";

const QuestionTimeClick = ({
  question,
  images,
  interval,
  correctImageIndex,
  audioSrc,
  tip,
  skipLink,
  nextQuestionLink,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [clickedPoint, setClickedPoint] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const [bannerMessage, setBannerMessage] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [bannerKey, setBannerKey] = useState(0);
  const [answerSelected, setAnswerSelected] = useState(false);
  const navigate = useNavigate();

  const updateScore = (points) => {
    const currentScore = parseInt(window.localStorage.getItem("score")) || 0;
    const newScore = currentScore + points;
    window.localStorage.setItem("score", newScore);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setClickedPoint(null);
      setAnswerSelected(false);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const handleClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const isCorrectClick = currentImageIndex === correctImageIndex;
    setClickedPoint({ x, y, correct: isCorrectClick });
    setIsCorrect(isCorrectClick);

    if (isCorrectClick) {
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
      setBannerMessage("Oh nein, das war leider falsch. \nTipp: " + tip);
      setShowBanner(true);
      setTimeout(() => setShowBanner(false), 3000);
    }

    setAnswerSelected(true);
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
        <h1 className="question">
          {question}
          <div className="audio-container" onClick={playAudio}>
            <img
              src="assets/img/volumen.png"
              alt="Play audio"
              className="speaker-icon"
            />
          </div>
        </h1>
        <div
          className="question-time-click_image-container"
          onClick={handleClick}
        >
          <img
            src={images[currentImageIndex]}
            alt="Quiz"
            className="question-time-click_quiz-images"
          />
          {clickedPoint && (
            <div
              className="question-time-click_click-marker"
              style={{
                top: `${clickedPoint.y}px`,
                left: `${clickedPoint.x}px`,
              }}
            >
              <img
                src={
                  clickedPoint.correct
                    ? "assets/img/check.png"
                    : "assets/img/false.png"
                }
                alt={clickedPoint.correct ? "Correct" : "Incorrect"}
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
        {showBanner && (
          <Banner
            key={bannerKey}
            message={bannerMessage}
            isCorrect={isCorrect}
          />
        )}
      </div>
    </div>
  );
};

export default QuestionTimeClick;
