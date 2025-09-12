import React from 'react';
import Button from './Button';
// import profile from '../assets/portfolio-pic.png';

function Main() {
  return (
    <main className="main-section">
      <div className="container">
          <section className="inside-container">
            {/* <img src={profile} alt="Profile" className="profile-image" /> */}
            <h2 className="welcome-heading">Michael Doughty</h2>
            <h3 className="title">Web Developer</h3>
            <p className="bio">
              Building clean, efficient, and user-focused web solutions for small and medium businesses and individual entrepreneurs who want to strengthen their digital presence and connect with their audience online.
            </p>
            <Button />
          </section>
      </div>
    </main>
  );
}

export default Main;
