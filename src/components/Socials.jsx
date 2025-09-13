import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Socials() {
    return (
        <div className="socials">
            <a href="https://github.com/mikedev" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub />
            </a>
            <a href="https://twitter.com/mikedev" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebook />
            </a>
            <a href="https://instagram.com/mikedev" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
            </a>
            <a href="https://linkedin.com/in/mikedev" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
            </a>
        </div>
    );
}

export default Socials;