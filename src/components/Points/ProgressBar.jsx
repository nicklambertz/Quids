import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    setProgress((prev) => (prev < 100 ? prev + 25 : 100));
  };

  return (
    <div className="progressbar-container">
      <div className="progressbar">
        <div
          className="progressbar__fill"
          style={{ width: `${progress}%`, minWidth: "30px" }}
        ></div>
        <div
          className={`star star1 ${progress >= 25 ? "visible" : "invisible"}`}
        >
          ⭐
        </div>
        <div
          className={`star star2 ${progress >= 50 ? "visible" : "invisible"}`}
        >
          ⭐
        </div>
        <div
          className={`star star3 ${progress >= 75 ? "visible" : "invisible"}`}
        >
          ⭐
        </div>
      </div>
      <button onClick={increaseProgress} className="progress-button">
        Fortschritt erhöhen
      </button>
    </div>
  );
};

export default ProgressBar;
