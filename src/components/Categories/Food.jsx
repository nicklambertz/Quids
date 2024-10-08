import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Categories from "./Categories";
import PageWrapper from "../PageWrapper";

const Food = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const nickname = localStorage.getItem("nickname");
    if (!nickname) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <PageWrapper background="url('./assets/img/background1.jpeg')">
        <div className="container">
          <Header />
          <Categories
            categories={[
              { link: "/nahrung1", label: "Frühstück", icon: "breakfast.jpg" },
              { link: "/nahrung2", label: "Snacks", icon: "snacks.jpg" },
              { link: "/nahrung3", label: "Vitamine", icon: "vitamins.jpg" },
            ]}
            background={'url("./assets/img/background1.jpeg")'}
          />
          <div>
            <Navbar />
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Food;
