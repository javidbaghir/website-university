import React from "react";
import "./hero.css";
import { MoveRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum totam iusto nesciunt doloremque ad consequuntur mollitia rem modi recusandae ducimus, deserunt odio! Tempora consectetur nihil quia ipsam obcaecati vero quas!
        </p>
        <button className="btn">
          Explore more <MoveRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
