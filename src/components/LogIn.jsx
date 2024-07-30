import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (nickname) {
      localStorage.setItem("nickname", nickname);
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;

