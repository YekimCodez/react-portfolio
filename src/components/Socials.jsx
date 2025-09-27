import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Socials() {
  return (
    <div className="socials">
      {/* Email (instead of GitHub, since GitHub has no DMs) */}
      <a
        href="mailto:mikedev.front.end@gmail.com"
        className="social-icon"
        aria-label="Send me an email"
      >
        <FaEnvelope />
      </a>

      {/* Messenger */}
      <a
        href="https://m.me/MikeDevWeb"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="Message me on Messenger"
      >
        <FaFacebook />
      </a>

      {/* Instagram DM */}
      <a
        href="https://www.instagram.com/direct/t/YOUR_USERNAME/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="Message me on Instagram"
      >
        <FaInstagram />
      </a>

      {/* LinkedIn (will show message button if logged in) */}
      <a
        href="https://www.linkedin.com/in/YOUR_PROFILE/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="Message me on LinkedIn"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}

export default Socials;

