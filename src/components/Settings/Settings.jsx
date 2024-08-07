import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMusic } from "./MusicContext";
import Header from "../Header/Header";
import PageWrapper from "../PageWrapper";

const Settings = () => {
  const [nickname, setNickname] = useState("Peter");
  const [isEditing, setIsEditing] = useState(false);
  const { isPlaying, setIsPlaying } = useMusic();
  const [avatarIndex, setAvatarIndex] = useState(0);

  const avatars = [
    "./assets/img/avatarCat.png",
    "./assets/img/avatarChick.png",
    "./assets/img/avatarDog.png",
    "./assets/img/avatarGiraffe.png",
    "./assets/img/avatarMouse.png",
    "./assets/img/avatarPanda.png",
  ];

  useEffect(() => {
    // Nickname und Avatar-Index aus localStorage laden
    const savedNickname = localStorage.getItem("nickname");
    if (savedNickname !== null) {
      setNickname(savedNickname);
    }

    const savedAvatarIndex = localStorage.getItem("avatarIndex");
    if (savedAvatarIndex !== null) {
      setAvatarIndex(parseInt(savedAvatarIndex, 10));
    }
  }, []);

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const saveNickname = () => {
    setIsEditing(false);
    // Nickname im localStorage speichern
    localStorage.setItem("nickname", nickname);
  };

  const changeAvatar = () => {
    const newAvatarIndex = (avatarIndex + 1) % avatars.length;
    setAvatarIndex(newAvatarIndex);
    // neuen Avatar-Index im localStorage speichern
    localStorage.setItem("avatarIndex", newAvatarIndex);
  };

  return (
    <PageWrapper background="url('./assets/img/background1.jpeg')">
      <div className="container">
        <Header />
        <Link to="/">
          <button className="revert-button-question">
            <img
              src="./assets/img/revert.png"
              alt="Zurück"
              className="revert-button img"
            />
          </button>
        </Link>
        <div className="settings-page">
          <div className="settings-content">
            <h2 className="settings-title">Einstellungen</h2>
            <div className="avatar-section">
              <img
                src={avatars[avatarIndex]}
                alt="Avatar"
                className="avatar-image"
              />
              <button className="edit-avatar-button" onClick={changeAvatar}>
                Avatar ändern
              </button>
            </div>
            <div className="divider" />
            <div className="nickname-section">
              <label className="nickname-label">Dein Name</label>
              {!isEditing ? (
                <div className="nickname-display" onClick={toggleEditing}>
                  <span>{nickname}</span>
                  <img
                    src="./assets/img/arrow.png"
                    alt="Edit"
                    className="edit-arrow"
                  />
                </div>
              ) : (
                <div className="nickname-edit">
                  <input
                    type="text"
                    value={nickname}
                    onChange={handleNicknameChange}
                    className="nickname-input"
                  />
                  <button
                    className="save-nickname-button"
                    onClick={saveNickname}
                  >
                    Speichern
                  </button>
                </div>
              )}
            </div>
            <div className="divider" />
            <div className="sound-section">
              <label className="sound-label">Ton</label>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={isPlaying}
                  onChange={() => setIsPlaying(!isPlaying)}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="divider" />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Settings;
