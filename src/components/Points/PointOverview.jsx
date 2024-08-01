import React, { useState } from "react";
import { Link } from "react-router-dom";
import PointScore from "./PointScore";
import ProgressBar from "./ProgressBar";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import PageWrapper from "../PageWrapper";

const PointOverview = () => {
  return (
    <>
      <PageWrapper background="url('./assets/img/background1.jpeg')">
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
      </PageWrapper>
    </>
  );
};

export default PointOverview;
