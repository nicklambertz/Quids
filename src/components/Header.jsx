import React, { Component } from "react";
import Modal from "./Modal"; // Import the Modal component

class Header extends Component {
  state = {
  };

  render() {
    return (
      <div className="top-header">
        <div className="profile">
          <img
            alt="Profile Picture"
            onClick={this.handleProfile}
            height={64}
            width={64}
          />
        </div>
        <div>
          <h1 className="title-Quizapp">Quiz App</h1>
        </div>
        <div className="settings">
          <img
            src="assets/img/settings.png"
            alt="Settings"
            onClick={this.handleSettings}
            height={50}
            width={50}
          />
        </div>
      </div>
    );
handleSettings = () => {

}
handleProfile = () => {

  }
  };
};
export default Header;
  
