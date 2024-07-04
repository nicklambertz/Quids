import React, { useState, useEffect } from "react";
import Banner from "./Banner";

const QuestionTimeClick = ({
  question,
  images,
  interval,
  correctImageIndex,
  audioSrc,
  tip,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [clickedPoint, setClickedPoint] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const [bannerMessage, setBannerMessage] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [bannerKey, setBannerKey] = useState(0); // Key für das Banner
  const [answerSelected, setAnswerSelected] = useState(false); // Variable, um festzuhalten, ob eine Antwort ausgewählt wurde

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setClickedPoint(null); // Click-Marker wird nach jedem Bildwechsel zurückgesetzt
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
    } else {
      setBannerMessage("Oh nein, das war leider falsch. \nTipp: " + tip);
    }

    // Banner-Update-Logik nur ausführen, wenn eine neue Antwort ausgewählt wurde
    if (answerSelected) {
      setShowBanner(false);
      setBannerKey((prevKey) => prevKey + 1);
      setShowBanner(true); // Zeige das neue Banner sofort an
    }

    // Markiere, dass eine Antwort ausgewählt wurde
    setAnswerSelected(true);
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
              top: clickedPoint.y,
              left: clickedPoint.x,
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
      </div>
      {showBanner && <Banner message={bannerMessage} isCorrect={isCorrect} />}
    </div>
  );
};

export default QuestionTimeClick;
