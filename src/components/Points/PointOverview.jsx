import React, { useState } from "react";
import PointScore from "./PointScore";
import ProgressBar from "./ProgressBar";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const PointOverview = () => {
  return (
    <>
      <div className="container">
        <Header />
        <PointScore />
        <ProgressBar />
        <Navbar />
      </div>
    </>
  );
};

export default PointOverview;
