import React, { useState } from "react";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";

const Home = () => {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous"
      ></link>
      <div className="container">
        <Header />
        <h1>Home</h1>
        <div>
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Home;
