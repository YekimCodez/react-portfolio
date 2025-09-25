import React from 'react';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Socials() {
    return (
        <div className="socials">
            <a href="https://github.com/youruser" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub />
            </a>
            <a href="https://facebook.com/youruser" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebook />
            </a>
            <a href="https://instagram.com/youruser" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
            </a>
            <a href="https://linkedin.com/in/youruser" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
            </a>
        </div>
    );
}

export default Socials;