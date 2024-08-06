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
