import styles from "./header.module.css"

const Header = () => {
  return <div className={styles["header"]}>
        <div className={styles["header__name"]}>
          <img src="./assets/img/zoo.jpg"/>
          <span>{window.localStorage.getItem("name")} </span>
          <span>{window.localStorage.getItem("score") ?? 0}</span>
        </div>
        <div className={styles["header__logo"]}>
          <h1 className={styles["logo"]}>Quids</h1>
        </div>  
        <div className={styles["header__reset"]}>
          Settings
        </div>
  </div>
}

export default Header;
