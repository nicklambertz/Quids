import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  };

  const getStars = () => {
    if (progress >= 30 && progress < 60) {
      return <div className="star">⭐</div>;
    } else if (progress >= 60) {
      return <div className="star">⭐⭐</div>;
    } else {
      return <div className="star invisible">⭐</div>;
    }
  };

  return (
    <div className="progressbar-container">
      <div className="progressbar">
        <div
          className="progressbar__fill"
          style={{ width: `${progress}%`, minWidth: "30px" }}
        ></div>
        {getStars()}
      </div>
      <button onClick={increaseProgress} className="progress-button">
        Fortschritt erhöhen
      </button>
    </div>
  );
};

export default ProgressBar;
