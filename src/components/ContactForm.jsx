// ContactForm.js
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Socials from './Socials';

function ContactForm() {
  const formRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setStatus('Message sent successfully ✅');
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          setStatus('Message failed to send ❌');
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="contact-section">
      <div className="contact-home">
        <h2>Get in Touch</h2>
        <p>
          If you have any questions or would like to work together, please fill
          out the form or reach out to me via my socials and tell me about your
          project.
        </p>
        <Socials />
      </div>

      <form ref={formRef} className="submitForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            className="inputField"
            type="text"
            id="name"
            name="name"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="inputField"
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            className="textArea"
            id="message"
            name="message"
            rows="5"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <button className="submitButton" type="submit">
          Send Message
        </button>

        {status && <p className="statusMessage">{status}</p>}
      </form>
    </div>
  );
}

export default ContactForm;

