import React, { useState } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Categories from "./Categories";
import PageWrapper from "../PageWrapper";

const Trash = () => {
  return (
    <>
      <PageWrapper background="url('./assets/img/background1.jpeg')">
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        ></link>
        <div className="container">
          <Header />
          <Categories
            categories={[
              { link: "/muell1", label: "Müll", icon: "trash.png" },
              { link: "", label: "Afrika", icon: "lion.png" },
              { link: "", label: "Asien", icon: "lion.png" },
              { link: "", label: "Europa", icon: "lion.png" },
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
