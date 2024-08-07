import React, { useState } from "react";
import Banner from "./Banner";
import Header from "../Header/Header";
import { Link, useNavigate } from "react-router-dom";

const QuestionDragAndDrop = ({
  question,
  dropBoxImages,
  answerImages,
  correctIndices,
  audioSrc,
  tip,
  skipLink,
  nextQuestionLink,
}) => {
  const [answers, setAnswers] = useState(Array(dropBoxImages.length).fill([]));
  const [availableAnswers, setAvailableAnswers] = useState(answerImages);
  const [showBanner, setShowBanner] = useState(false);
  const [bannerMessage, setBannerMessage] = useState("");
  const [draggedItem, setDraggedItem] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const updateScore = (points) => {
    const currentScore = parseInt(window.localStorage.getItem("score")) || 0;
    const newScore = currentScore + points;
    window.localStorage.setItem("score", newScore);
  };

  const handleDragStart = (index) => {
    setDraggedItem(index);
  };

  const handleDrop = (index) => {
    if (draggedItem === null) return;

    const updatedAnswers = [...answers];
    updatedAnswers[index] = [
      ...updatedAnswers[index],
      availableAnswers[draggedItem],
    ];

    const newAvailableAnswers = availableAnswers.filter(
      (_, i) => i !== draggedItem
    );

    setAnswers(updatedAnswers);
    setAvailableAnswers(newAvailableAnswers);
    setDraggedItem(null);
  };

  const handleRemoveAnswer = (boxIndex, answerIndex) => {
    const updatedAnswers = [...answers];
    const answerToRemove = updatedAnswers[boxIndex].splice(answerIndex, 1)[0];

    setAnswers(updatedAnswers);
    setAvailableAnswers([...availableAnswers, answerToRemove]);
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const playAudio = () => {
    const audio = new Audio(audioSrc);
    audio.play();
  };

  const checkAnswers = () => {
    const isAnswerCorrect = correctIndices.every(
      (correctIndex, idx) =>
        answers[idx].length === 1 && answers[idx][0].id === correctIndex
    );
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
        <div className="drag-and-drop-container">
          <div className="drop-boxes">
            {dropBoxImages.map((dropBoxImage, index) => (
              <div
                key={index}
                onDrop={() => handleDrop(index)}
                onDragOver={allowDrop}
                className="drop-box"
              >
                <img
                  src={dropBoxImage.imgSrc}
                  alt={`drop-box-${index}`}
                  className="drop-box-image"
                  style={{
                    width: dropBoxImage.width,
                    backgroundColor: `${dropBoxImage.color}`,
                  }}
                />
                <div className="answers-in-box">
                  {answers[index].map((answer, i) => (
                    <div key={i} className="answer-in-box">
                      <img
                        src={answer.src}
                        alt={`answer-${i}`}
                        className="answer-image-drag"
                        draggable
                        onDragStart={() => handleDragStart(answer.id)}
                        style={{ width: answer.width }}
                      />
                      <button onClick={() => handleRemoveAnswer(index, i)}>
                        X
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="answer-options">
            {availableAnswers.map((answerImage, index) => (
              <div
                key={answerImage.id}
                draggable
                onDragStart={() => handleDragStart(index)}
                className="draggable-answer"
              >
                <img
                  src={answerImage.src}
                  alt={`answer-option-${index}`}
                  className="answer-option-image"
                  style={{ width: answerImage.width }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="check-button-container">
          <button className="check-button" onClick={checkAnswers}>
            <img src="assets/img/play.png" alt="Check question" />
          </button>
        </div>
        <div
          className="skip-button-container"
          style={{
            position: "fixed",
            top: "53%",
            right: "180px",
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

        {showBanner && <Banner message={bannerMessage} isCorrect={isCorrect} />}
      </div>
    </div>
  );
};

export default QuestionDragAndDrop;
