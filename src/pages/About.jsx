// import React from "react";
// import profile from "../assets/photo_with_bg_removed.png";
// import TechStack from "../components/TechStack";

// function About() {
//   return (
//     <div className="about_container">
//       <h2 className="about-heading">About Me</h2>
//       <div className="profile_wrapper">
//           <img src={profile} alt="Profile" className="about_profile_image" />
//           <p className="about-text">
//             I am a passionate web developer with experience in building dynamic
//             web applications.
//           </p>

//           <section className="skills_section">
//             <h3 className="skills_heading">Skills</h3>
            
//             <TechStack />
//           </section>
//       </div>
//     </div>
//   );
// }

// export default About;

import React from "react";
import profile from "../assets/photo_with_bg_removed.png";
import TechStack from "../components/TechStack";
import DevCard from "../components/DevCard";

function About() {
  return (
    <div className="about_container">
      <h2 className="about-heading">About Me</h2>

      <div className="about-grid">
        {/* Left: DevCard */}
        <DevCard src={profile} variant="halo" />

        {/* Right: Bio + Stack */}
        <div className="about-content">
          <p className="about-text">
            I’m a web developer focused on clean, efficient, and user-focused
            solutions for small and medium businesses and individual
            entrepreneurs who want to strengthen their digital presence.
          </p>

          <section className="skills_section">
            <h3 className="skills_heading">Tech Stack</h3>
            <TechStack />
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;

