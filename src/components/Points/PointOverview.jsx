import React, { useState } from "react";
import PointScore from "./PointScore";
import ProgressBar from "./ProgressBar";

const PointOverview = () => {
  return (
    <>
      <PointScore />
      <ProgressBar />
    </>
  );
};

export default PointOverview;
