import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import styles from "./LogIn.module.css";

const LogIn = () => {
  const [benutzername, setBenutzername] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setBenutzername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("benutzername", benutzername);
    navigate("/home");
  };

  return (
    <div className={styles["logIn__container"]}>
      <h2 className={styles["logIn__eingabeauforderung-h2"]}>Hallo! schön, dass du hier bist!</h2>
      <p className={styles["logIn__eingabeauforderung-p"]}>Gib hier deinen Namen ein:</p>
      <form onSubmit={handleSubmit}>
        <input
          className={styles["logIn__benutzername"]}
          type="text"
          name="benutzername"
          size={30}
          placeholder="Dein Name"
          value={benutzername}
          onChange={handleInputChange}
        />
        <input className={styles["logIn__submit"]} type="submit" value="Weiter" />
      </form>
    </div>
  );
};

export default LogIn;
