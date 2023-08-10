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
            <p> React, JavaScript, HTML, CSS</p>
            <p> Spring Boot, MongoDb , Java </p>
          </div>
          <h3>ToolSet:-</h3>
          <p> Github, Postman, Vscode, Eclipse , Intellijj Idea</p>
          <p>Hobbies: Coding, Reading, Hiking</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
