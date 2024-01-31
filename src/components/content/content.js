import React from "react";
import "./content.css";
import team from "../../img/team-viewer.png";
import demo from "../../img/demodesk.png";
import urban from "../../img/urban-sport.png";
import loyalty from "../../img/Loyalty.png";

const Content = props => {
  const {
    informationOne,
    informationTwo,
    informationThree,
    title,
    informationFour,
    clientTitle,
    description,
  } = props;
  return (
    <div className="content">
      <h3>
        <strong>{title}</strong>
      </h3>
      <div>
        <p>{description}</p>
        <div className="circle-container">
          <div className="left-circle">
            <p className="circle">{informationOne}</p>
            <p className="circle">{informationTwo}</p>
          </div>
          <div className="right-circle">
            <p className="circle">{informationThree}</p>
            <p className="circle">{informationFour}</p>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <p>
          <strong>{clientTitle}</strong>
        </p>
        <div className="image-container">
          <div className="image-section">
            <img src={team} alt="team" />
            <img src={demo} alt="demo" />
          </div>
          <div className="image-section">
            <img src={urban} alt="urban" />
            <img src={loyalty} alt="loyalty" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
