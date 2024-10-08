import React, { useState } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Categories from "./Categories";
import PageWrapper from "../PageWrapper";

const Animals = () => {
  return (
    <>
      <PageWrapper background="url('./assets/img/background1.jpeg')">
        <div className="container">
          <Header />
          <Categories
            categories={[
              { link: "/tiere1", label: "Tier in der Wüste", icon: "Afrika.png" },
              { link: "/tiere2", label: "Tier aus Asien", icon: "asialandscape.jpg" },
              { link: "/tiere3", label: "Einordnung Tiere", icon: "animalscat.jpg" },
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

export default Animals;
