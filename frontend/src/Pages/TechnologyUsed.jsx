import React from "react";
import "./TechnologyUsed.css";
const TechnologyUsed = () => {
  return (
    <div className="cardTechs">
      <div class="logos">
        <img src={process.env.PUBLIC_URL + "reactss.png"} alt="Logo" />
      </div>
      <div class="logos">
        <img src={process.env.PUBLIC_URL + "springboot.png"} alt="Logo" />
      </div>
      <div class="logos">
        <img src={process.env.PUBLIC_URL + "mongodb.png"} alt="Logo" />
      </div>
      <div class="logos">
        <img src={process.env.PUBLIC_URL + "chartjsss.png"} alt="Logo" />
      </div>
    </div>
  );
};

export default TechnologyUsed;
