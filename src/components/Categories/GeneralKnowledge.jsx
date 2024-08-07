import React, { useState } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Categories from "./Categories";
import PageWrapper from "../PageWrapper";

const Trash = () => {
  return (
    <>
      <PageWrapper background="url('./assets/img/background1.jpeg')">
        <div className="container">
          <Header />
          <Categories
            categories={[
              { link: "/allgemein1", label: "Mülltrennung", icon: "peoplerecycling.jpg" },
              { link: "/allgemein2", label: "Einschlafen", icon: "sleep.jpg" },
              { link: "/allgemein3", label: "Jahreszeiten", icon: "4-seasons.jpg" },
            ]}
          />
          <div>
            <Navbar />
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Trash;
