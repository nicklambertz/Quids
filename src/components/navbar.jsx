import React, { useState } from "react";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState(1); // Aktiver Button-Index

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    <div className="navbar">
      <button
        className={`nav-button ${activeButton === 1 ? "active" : ""}`}
        onClick={() => handleButtonClick(1)}
      >
        <img src="/assets/img/open-book.png" alt="Button 1" />
      </button>
      <button
        className={`nav-button ${activeButton === 2 ? "active" : ""}`}
        onClick={() => handleButtonClick(2)}
      >
        <img src="assets/img/traffic-light.png" alt="Button 2" />
      </button>
      <button
        className={`nav-button ${activeButton === 3 ? "active" : ""}`}
        onClick={() => handleButtonClick(3)}
      >
        <img src="assets/img/trash.png" alt="Button 3" />
      </button>
      <button
        className={`nav-button ${activeButton === 4 ? "active" : ""}`}
        onClick={() => handleButtonClick(4)}
      >
        <img src="assets/img/lion.png" alt="Button 4" />
      </button>
      <button
        className={`nav-button ${activeButton === 5 ? "active" : ""}`}
        onClick={() => handleButtonClick(5)}
      >
        <img src="assets/img/numbers.png" alt="Button 5" />
      </button>
    </div>
  );
};

export default Navbar;
