import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import PageWrapper from "./PageWrapper";
import styles from "./Categories/categories.module.css";

const Home = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const nickname = localStorage.getItem("nickname");
    if (!nickname) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <PageWrapper background="url('./assets/img/background1.jpeg')">
        <div className="container">
          <Header />
          <div className={styles["categories-container"]}>
            <Link to={"/nahrung1"} className={styles["start-quiz-button"]}>
              <img src="./assets/img/play.png" alt="Play" />
              Quiz starten
            </Link>
          </div>
          <div className="container-welcome-banner">
            <div className="welcome-banner-home">Willkommen!</div>
          </div>
          <div>
            <Navbar />
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Home;
