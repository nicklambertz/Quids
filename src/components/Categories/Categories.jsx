import React from "react";
import { Link } from "react-router-dom";
import styles from "./categories.module.css";

const Categories = (props) => {
  const { categories } = props;

  return (
    <div className={styles["categories-container"]}>
      <Link to={"/verkehr1"} className={styles["start-quiz-button"]}>
        <img src="./assets/img/play.png" alt="Play" />
        Quiz starten
      </Link>
      <div className={styles["categories"]}>
        {categories.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className={styles["categories__item"]}
          >
            <img src={"./assets/img/" + item.icon} alt={item.label} />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
