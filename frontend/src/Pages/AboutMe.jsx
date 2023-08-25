import React from "react";
import "./AboutMe.css"; // Import the CSS for styling

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="card">
        <div className="left">
          <img src={process.env.PUBLIC_URL + "/Photo.jpg"} alt="Profile" />
        </div>
        <div className="right">
          <h2>Shubham Bolave</h2>
          <div className="skillsetcolumn">
            <h3>Skillset:</h3>
            <p> Java, Spring Boot, JavaScript, React, Html/CSS, MongoDB, MySQL </p>
          </div>
          <div className="toolsetcolumn">
            <h3>ToolSet:-</h3>
            <p> Github, Postman, Vscode, Eclipse, Intellij Idea</p>
            <p></p>
          </div>
          <div className="hobbies">
            <h3>Hobbies:-</h3>
            <p>Coding, Reading, Travelling, Chess</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
