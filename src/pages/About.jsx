import React from "react";
import profile from "../assets/my_profile_pic.png";

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img src={profile} alt="Profile" />
      <p>
        I am a passionate web developer with experience in building dynamic
        web applications.
      </p>
    </div>
  );
}

export default About;
