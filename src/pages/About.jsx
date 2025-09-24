import React from "react";
import profile from "../assets/my_profile_pic.png";

function About() {
  return (
    <div className="about_container">
      <h2 className="about-heading">About Me</h2>
      <div className="profile_wrapper">
          <img src={profile} alt="Profile" className="about_profile_image" />
          <p className="about-text">
            I am a passionate web developer with experience in building dynamic
            web applications.
          </p>
      </div>
    </div>
  );
}

export default About;
