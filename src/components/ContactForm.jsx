// ContactForm.js
import React, { useState } from 'react';
import Socials from './Socials';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { name, email, message });
    // Add your logic to send email or data here
    setName('');
    setEmail('');
    setMessage('');
  };

  return (    
    <div className="contact-section">
        <div className="contact-home">
            <h2>Get in Touch</h2>
            <p>If you have any questions or would like to work together, please fill out the form or reach out to me via my socials and tell me about your project.</p>
            <Socials />
        </div>

        <form className="submitForm" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input className="inputField"
                type="text"
                id="name"
                placeholder='Your full name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input className="inputField"
                type="email"
                id="email"
                placeholder='Your email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea className="textArea"
                id="message"
                rows="5"
                placeholder='Your message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                ></textarea>
            </div>
            <button className="submitButton" type="submit">Send Message</button>
        </form>
    </div>
  );
}

export default ContactForm;