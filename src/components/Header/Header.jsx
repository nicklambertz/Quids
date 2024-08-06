import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./header.module.css";

const Header = () => {
  const avatars = [
    "./assets/img/avatar1.jpg",
    "./assets/img/settings.png",
    "./assets/img/trash.png",
    "./assets/img/lion.png",
    "./assets/img/star-filled.png",
  ];

  const [avatarSrc, setAvatarSrc] = useState(avatars[0]);
  const [nickname, setNickname] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Avatar-Index aus localStorage laden
    const savedAvatarIndex = localStorage.getItem("avatarIndex");
    if (savedAvatarIndex !== null) {
      setAvatarSrc(avatars[parseInt(savedAvatarIndex, 10)]);
    }

    const savedNickname = localStorage.getItem("nickname");
    if (savedNickname) {
      setNickname(savedNickname);
    }

    const savedScore = localStorage.getItem("score");
    if (savedScore) {
      setScore(savedScore);
    }
  }, [avatars]);

  return (
    <div className={styles.header}>
      <Link
        to="/punkte"
        className={`${styles.header__link} ${styles.header__score}`}
      >
        <img src="./assets/img/stern.png" alt="Star" />
        <span>{score}</span>
      </Link>
      <Link to="/" className={`${styles.header__link} ${styles.logo}`}>
        <img src="./assets/img/quids-logo.png" alt="Logo" />
      </Link>
      <Link
        to="/einstellungen"
        className={`${styles.header__link} ${styles.header__profile}`}
      >
        <img src={avatarSrc} alt="Avatar" />
        <span>{nickname}</span>
      </Link>
    </div>
  );
};

export default Header;
