import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LogIn.module.css";
import PageWrapper from "../PageWrapper";

const LogIn = () => {
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setNickname(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("nickname", nickname);
    navigate("/");
  };

  return (
    <PageWrapper background="url('./assets/img/loginbackgr2.jpg')">
      <div className={styles["logIn__container"]}>
      <img className={styles["logIn__img"]} src="./assets/img/childrenwaving2.png"/>

        <h2 className={styles["logIn__eingabeauforderung-h2"]}>
          Hallo! Schön, dass du hier bist!
        </h2>
        <p className={styles["logIn__eingabeauforderung-p"]}>
          Gib hier deinen Namen ein:
        </p>
        <form onSubmit={handleSubmit}>
          <input
            className={styles["logIn__benutzername"]}
            type="text"
            name="nickname"
            size={30}
            placeholder="Dein Name"
            value={nickname}
            onChange={handleInputChange}
          />
          <input
            className={styles["logIn__submit"]}
            type="submit"
            value="Weiter"
          />
        </form>
      </div>
    </PageWrapper>
  );
};

export default LogIn;
