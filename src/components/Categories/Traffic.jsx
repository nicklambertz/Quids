import React, { useState } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Categories from "./Categories";
import PageWrapper from "../PageWrapper";

const Traffic = () => {
  return (
    <>
      <PageWrapper background="url('./assets/img/background1.jpeg')">
    
        <div className="container">
          <Header />
          <Categories
            categories={[
              {
                link: "/verkehr1",
                label: "Fahrrad",
                icon: "bicycleride.jpg",
              },
              { link: "/verkehr2", label: "Ampel", icon: "citytrafficlights.jpg" },
              { link: "/verkehr3", label: "Verkehrsschilder", icon: "trafficsign.jpg" },
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

export default Traffic;
