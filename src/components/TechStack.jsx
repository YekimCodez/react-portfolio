import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaSass } from 'react-icons/fa';
import { SiJavascript, SiBootstrap, SiTailwindcss, SiGithub, SiVite, SiNpm } from 'react-icons/si';

const TechStack = () => {
  return (
    <div className="container">
      <h2 className="techstack-heading">
        As a frontend developer, I work with the following technologies:
      </h2>
      <ul className="techstack-list">
        <li className="techstack-item"><FaHtml5 color="#E34F26" /> HTML</li>
        <li className="techstack-item"><FaCss3Alt color="#1572B6" /> CSS</li>
        <li className="techstack-item"><SiJavascript color="#F7DF1E" /> JavaScript (ES6+)</li>
        <li className="techstack-item"><FaReact color="#61DAFB" /> React</li>
        <li className="techstack-item"><FaSass color="#CC6699" /> Sass</li>
        <li className="techstack-item"><SiBootstrap color="#7952B3" /> Bootstrap</li>
        <li className="techstack-item"><SiTailwindcss color="#38B2AC" /> Tailwind CSS</li>
      </ul>

      <h3 className="tools-heading">Tools & Platforms</h3>
      <ul className="tools-list">
        <li className="tools-item"><SiGithub /> Git & GitHub</li>
        <li className="tools-item"><SiVite color="#646CFF" /> Vite</li>
        <li className="tools-item"><SiNpm color="#CB3837" /> npm</li>
      </ul>
    </div>
  );
};

export default TechStack;

