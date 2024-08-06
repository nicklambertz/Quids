import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header/Header";

const Settings = () => {
  const [nickname, setNickname] = useState("Peter");
  const [isEditing, setIsEditing] = useState(false);
  const [sound, setSound] = useState(true);
  const [avatarIndex, setAvatarIndex] = useState(0);

  const avatars = [
    "./assets/img/avatar1.jpg",
    "./assets/img/settings.png",
    "./assets/img/trash.png",
    "./assets/img/lion.png",
    "./assets/img/star-filled.png",
  ];

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const saveNickname = () => {
    setIsEditing(false);
    // Code für Cookies einfügen
  };

  const toggleSound = () => {
    setSound(!sound);
  };

  const changeAvatar = () => {
    setAvatarIndex((prevIndex) => (prevIndex + 1) % avatars.length);
  };

  return (
    <div className="container">
      <Header />
      <div className="settings-page">
        <Link to="/">
          <button className="revert-button">
            <img
              src="./assets/img/revert.png"
              alt="Zurück"
              className="revert-button img"
            />
          </button>
        </Link>
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
                <button className="save-nickname-button" onClick={saveNickname}>
                  Speichern
                </button>
              </div>
            )}
          </div>
          <div className="divider" />
          <div className="sound-section">
            <label className="sound-label">Ton</label>
            <label className="switch">
              <input type="checkbox" checked={sound} onChange={toggleSound} />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="divider" />
        </div>
      </div>
    </div>
  );
};

export default Settings;
