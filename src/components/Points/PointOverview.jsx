import React, { useState } from "react";
import { Link } from "react-router-dom";
import PointScore from "./PointScore";
import ProgressBar from "./ProgressBar";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const PointOverview = () => {
  return (
    <>
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
          <PointScore />
          <ProgressBar />
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default PointOverview;
