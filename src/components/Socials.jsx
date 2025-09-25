// import React from 'react';
// import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

// function Socials() {
//     return (
//         <div className="socials">
//             <a href="https://github.com/youruser" target="_blank" rel="noopener noreferrer" className="social-icon">
//                 <FaGithub />
//             </a>
//             <a href="https://facebook.com/youruser" target="_blank" rel="noopener noreferrer" className="social-icon">
//                 <FaFacebook />
//             </a>
//             <a href="https://instagram.com/youruser" target="_blank" rel="noopener noreferrer" className="social-icon">
//                 <FaInstagram />
//             </a>
//             <a href="https://linkedin.com/in/youruser" target="_blank" rel="noopener noreferrer" className="social-icon">
//                 <FaLinkedin />
//             </a>
//         </div>
//     );
// }

// export default Socials;

// import React from 'react';
// import { FaGithub, FaFacebookMessenger, FaInstagram, FaLinkedin } from 'react-icons/fa';

// function Socials() {
//   return (
//     <div className="socials">
//       {/* GitHub → fallback to email */}
//       <a href="mailto:studentprodigy@gmail.com" className="social-icon" aria-label="Email me">
//         <FaGithub />
//       </a>

//       {/* Messenger */}
//       <a href="https://m.me/Michael_Doughty" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Message me on Facebook Messenger">
//         <FaFacebookMessenger />
//       </a>

//       {/* Instagram DM */}
//       <a href="https://www.instagram.com/direct/t/YOUR_USERNAME/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Message me on Instagram">
//         <FaInstagram />
//       </a>

//       {/* LinkedIn */}
//       <a href="https://www.linkedin.com/in/YOUR_PROFILE/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Message me on LinkedIn">
//         <FaLinkedin />
//       </a>
//     </div>
//   );
// }

// export default Socials;

import React from 'react';
import { FaEnvelope, FaFacebookMessenger, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Socials() {
  return (
    <div className="socials">
      {/* Email (instead of GitHub, since GitHub has no DMs) */}
      <a
        href="mailto:youraddress@example.com"
        className="social-icon"
        aria-label="Send me an email"
      >
        <FaEnvelope />
      </a>

      {/* Messenger */}
      <a
        href="https://m.me/YOUR_PAGE_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="Message me on Messenger"
      >
        <FaFacebookMessenger />
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

