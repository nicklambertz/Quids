import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [stars, setStars] = useState(0);

  useEffect(() => {
    const storedScore = parseInt(window.localStorage.getItem("score")) || 0;
    setProgress(storedScore);
  }, []);

  const progressWidth = progress >= 400 ? 100 : ((progress % 400) * 100) / 400;

  return (
    <div className="progressbar-container">
      <div className="progressbar">
        <div
          className="progressbar__fill"
          style={{ width: `${progressWidth}%`, minWidth: "10px" }}
        ></div>
        <div
          className={`star star1 ${progress >= 100 ? "visible" : "invisible"}`}
        >
          ⭐
        </div>
        <div
          className={`star star2 ${progress >= 200 ? "visible" : "invisible"}`}
        >
          ⭐
        </div>
        <div
          className={`star star3 ${progress >= 300 ? "visible" : "invisible"}`}
        >
          ⭐
        </div>
        <div
          className={`star star4 ${progress >= 400 ? "visible" : "invisible"}`}
        >
          ⭐
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
