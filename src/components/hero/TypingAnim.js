import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {

  return (
    <TypeAnimation
      sequence={[
        "Software Developer", 
        2500,
        "Web Developer",
        1500,
        "Frontend Developer",
        1500,
        "Backend Developer",
        1500
      ]}
      speed={50}
      style={{
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;
