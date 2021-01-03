import React from "react";
import "../index.css";

import Comman from "./Comman";

const About = () => {
  return (
    <>
      <Comman
        name="WelCome to About page "
        imgsrc={
          "https://i0.wp.com/www.animationboss.net/wp-content/uploads/2018/08/animated-short-film-dear-alice.jpg?fit=800%2C450"
        }
        visit="./contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
