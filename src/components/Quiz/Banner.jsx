import React, { useEffect } from "react";

const Banner = ({ message, isCorrect }) => {
  const bannerClass = isCorrect ? "banner-right" : "banner-wrong";
  const messageLines = message.split("\n");

  const correctAudioSrc = "./assets/audio/question-correct.mp3";
  const incorrectAudioSrc = "./assets/audio/question-incorrect.mp3";

  useEffect(() => {
    const audioSrc = isCorrect ? correctAudioSrc : incorrectAudioSrc;
    const audio = new Audio(audioSrc);
    audio.play();
  }, [isCorrect]);

  return (
    <div className={bannerClass}>
      {messageLines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
      <img
        src={isCorrect ? "./assets/img/check.png" : "./assets/img/false.png"}
        alt={isCorrect ? "Correct" : "Incorrect"}
      />
      <div className="audio-container-banner">
        <img
          src="assets/img/volumen.png"
          alt="Play audio"
          className="speaker-icon"
        />
      </div>
    </div>
  );
};

export default Banner;
