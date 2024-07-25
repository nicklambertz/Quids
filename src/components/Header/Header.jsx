import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <Link
        to="/punkte"
        className={`${styles.header__link} ${styles.header__name}`}
      >
        <img src="./assets/img/avatar1.jpg" />
        <span>{window.localStorage.getItem("benutzername")} </span>
        <span>{window.localStorage.getItem("score") ?? 0}</span>
      </Link>
      <Link to="/login" className={`${styles.header__link} ${styles.logo}`}>
        <h1 className={styles["logo"]}>Quids</h1>
      </Link>
      <Link
        to="/einstellungen"
        className={`${styles.header__link} ${styles["header__reset"]}`}
      >
        Settings
      </Link>
    </div>
  );
};

export default Header;
