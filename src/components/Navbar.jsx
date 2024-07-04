import React, { useState } from "react";
import { Link } from "react-router-dom";

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
        <Link to="/verkehr">
          <img src="/assets/img/open-book.png" alt="Button 1" />
        </Link>
      </button>
      <button
        className={`nav-button ${activeButton === 2 ? "active" : ""}`}
        onClick={() => handleButtonClick(2)}
      >
        <Link to="/nahrung">
          <img src="assets/img/traffic-light.png" alt="Button 2" />
        </Link>
      </button>
      <button
        className={`nav-button ${activeButton === 3 ? "active" : ""}`}
        onClick={() => handleButtonClick(3)}
      >
        <Link to="/müll">
          <img src="assets/img/trash.png" alt="Button 3" />
        </Link>
      </button>
      <button
        className={`nav-button ${activeButton === 4 ? "active" : ""}`}
        onClick={() => handleButtonClick(4)}
      >
        <Link to="/punkte">
          <img src="assets/img/lion.png" alt="Button 4" />
        </Link>
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
