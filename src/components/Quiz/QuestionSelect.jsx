import React, { useState } from "react";
import Banner from "./Banner";
import Header from "../Header/Header";
import { Link, useNavigate } from "react-router-dom";

const QuestionSelect = ({
  question,
  answers,
  correctAnswerIndex,
  audioSrc,
  tip,
  skipLink,
  nextQuestionLink,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [bannerMessage, setBannerMessage] = useState("");
  const navigate = useNavigate();

  const updateScore = (points) => {
    const currentScore = parseInt(window.localStorage.getItem("score")) || 0;
    const newScore = currentScore + points;
    window.localStorage.setItem("score", newScore);
  };

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
    const isAnswerCorrect = index === correctAnswerIndex;
    handleAnswer(isAnswerCorrect);
  };

  const handleAnswer = (isAnswerCorrect) => {
    if (isAnswerCorrect) {
      setBannerMessage("Richtig! Gut gemacht!");
      setIsCorrect(true);
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
      setIsCorrect(false);
      setShowBanner(true);
      setTimeout(() => setShowBanner(false), 3000);
    }
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
        <div className="answers">
          {answers.map((answer, index) => (
            <div
              key={index}
              className={`answer ${selectedAnswer === index ? "selected" : ""}`}
              onClick={() => handleAnswerClick(index)}
              style={{ backgroundColor: answer.color }}
            >
              <img
                src={answer.imgSrc}
                alt={answer.text}
                className="answer-image"
                style={{ width: answer.width }}
              />
              <span className="answer-text">{answer.text}</span>
            </div>
          ))}
          <div className="skip-button-container-select">
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

export default QuestionSelect;
