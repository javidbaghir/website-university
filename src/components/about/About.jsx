import React from "react";
import "./about.css";
import oxford from "../../assets/oxford.jpg";
import { MdOutlinePlayCircleOutline } from "react-icons/md";

const About = ({ setPlayVideo }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={oxford} alt="about-img" className="about-img" />
        <MdOutlinePlayCircleOutline
          size={58}
          className="play-icon"
          onClick={() => setPlayVideo(true)}
        />
      </div>
      <div className="about-right">
        <h3>About course</h3>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          assumenda numquam magnam harum quam consequuntur perspiciatis! Nisi,
          quas minima culpa beatae totam incidunt eaque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          assumenda numquam magnam harum quam consequuntur perspiciatis! Nisi,
          quas minima culpa beatae totam incidunt eaque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          assumenda numquam magnam harum quam consequuntur perspiciatis! Nisi,
          quas minima culpa beatae totam incidunt eaque!
        </p>
      </div>
    </div>
  );
};

export default About;
