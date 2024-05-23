import React, { Component } from "react";
import Modal from "./Modal"; // Import the Modal component

class Header extends Component {
  state = {
    showModal: false, // Add a state to control the visibility of the modal
    selectedPicture: "assets/img/avatar1.jpg", // Add a state to store the selected picture
  };

  render() {
    return (
      <div className="top-header">
        <div className="profile">
          <img
            src={this.state.selectedPicture} // Use the selected picture from state
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

        {/* Render the modal component */}
        {this.state.showModal && (
          <Modal
            onClose={this.handleModalClose}
            onSelectPicture={this.handlePictureSelect}
          />
        )}
      </div>
    );
  }

  handleProfile = () => {
    this.setState({ showModal: true }); // Show the modal when profile picture is clicked
  };

  handleSettings = () => {
    // Code to handle settings button click
  };

  handleModalClose = () => {
    this.setState({ showModal: false }); // Close the modal
  };

  handlePictureSelect = (picture) => {
    this.setState({ selectedPicture: picture }); // Update the selected picture in state
    this.setState({ showModal: false }); // Close the modal after picture selection
  };
}

export default Header;
