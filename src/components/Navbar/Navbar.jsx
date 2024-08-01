import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    {
      link: "/nahrung",
      label: "Nahrung",
      icon: "numbers.png",
    },
    {
      link: "/verkehr",
      label: "Verkehr",
      icon: "traffic-light.png",
    },
    {
      link: "/muell",
      label: "Müll",
      icon: "trash.png",
    },
    {
      link: "/tiere",
      label: "Tiere",
      icon: "lion.png",
    },
    {
      link: "/nacht",
      label: "Nacht",
      icon: "star-filled.png",
    },
  ];

  return (
    <div className={styles["navbar"]}>
      {links.map((item, index) => {
        const isActive = currentPath === item.link;
        return (
          <Link
            to={item.link}
            key={index}
            className={`${styles["navbar__item"]} ${
              isActive ? styles["navbar__item--active"] : ""
            }`}
          >
            <img src={"./assets/img/" + item.icon} alt={item.label} />
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
