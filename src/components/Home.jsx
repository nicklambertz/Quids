import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Categories from "./Categories/Categories";

const Home = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const nickname = localStorage.getItem("nickname");
    if (!nickname) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
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
            { link: "", label: "Home", icon: "numbers.png" },
            { link: "", label: "Home", icon: "numbers.png" },
            { link: "", label: "Home", icon: "numbers.png" },
            { link: "", label: "Home", icon: "numbers.png" },
          ]}
        />
        <div>
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Home;
