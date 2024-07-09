import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  const links = [
    {
      link: "/tiere",
      label: "Tiere",
      icon: "lion.png",
    },
    {
      link: "/verkehr",
      label: "Verkehr",
      icon: "traffic-light.png",
    },
    {
      link: "/nahrung",
      label: "Nahrung",
      icon: "numbers.png",
    },
    {
      link: "/muell",
      label: "muell",
      icon: "trash.png",
    },
    {
      link: "/sprache",
      label: "buch",
      icon: "open-book.png",
    },
  ];

  return (
    <div className={styles["navbar"]}>
      {links.map((item, index) => {
        return (
          <Link to={item.link} key={index} className={styles["navbar__item"]}>
            <img src={"./assets/img/" + item.icon} alt={item.label} />
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
