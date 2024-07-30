import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [stars, setStars] = useState(0);

  useEffect(() => {
    const storedScore = parseInt(window.localStorage.getItem("score")) || 0;
    setProgress(storedScore);
  }, []);

  const progressWidth = progress >= 800 ? 100 : ((progress % 800) * 100) / 800;

  return (
    <div className="progressbar-container">
      <div className="progressbar">
        <div
          className="progressbar__fill"
          style={{ width: `${progressWidth}%`, minWidth: "0px" }}
        ></div>
        <div
          className={`star star1 ${progress >= 200 ? "visible" : "invisible"}`}
        >
          ⭐
        </div>
        <div
          className={`star star2 ${progress >= 400 ? "visible" : "invisible"}`}
        >
          ⭐
        </div>
        <div
          className={`star star3 ${progress >= 600 ? "visible" : "invisible"}`}
        >
          ⭐
        </div>
        <div
          className={`star star4 ${progress >= 800 ? "visible" : "invisible"}`}
        >
          ⭐
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
