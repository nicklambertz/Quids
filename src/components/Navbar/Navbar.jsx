import React, { useState } from "react";
import styles from "./navbar.module.css"

const Navbar = () => {

  const links = [
    {
        link: "",
        label: "Tiere",
        icon: "lion.png"
    },
    {
      link: "",
      label: "zahlen",
      icon: "numbers.png"
    },
    {
      link: "",
      label: "buch",
      icon: "open-book.png"
    },
    {
      link: "",
      label: "muell",
      icon: "trash.png"
    },
    {
      link: "",
      label: "Tiere",
      icon: "traffic-light.png"
    }
  ]


  return (
    <div className={styles["navbar"]}>
      {links.map((item, index) => {
        return <div className={styles["navbar__item"]}>
          <img src={"./assets/img/" + item.icon}/>
        </div>
      })}
    </div>
  );
};

export default Navbar;