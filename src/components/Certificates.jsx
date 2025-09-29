// src/components/Certificates.jsx
import React, { useState } from "react";
import CertificateModal from "./CertificateModal";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certs = [
    {
      title: "Introduction to CSS",
      file: "public/certificates/css-cert.pdf",
    },
    {
      title: "Introduction to Web Development",
      file: "public/certificates/web-dev-cert.pdf",
    },
  ];

  return (
    <section className="certificates">
      <h2 className="section-heading">Certificates</h2>
      <ul className="cert-list">
        {certs.map((cert, i) => (
          <li key={i} className="cert-item">
            <h3>{cert.title}</h3>
            <button
              className="btn btn-ghost"
              onClick={() => setSelectedCert(cert)}
            >
              View Certificate
            </button>
          </li>
        ))}
      </ul>

      <CertificateModal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        cert={selectedCert}
      />
    </section>
  );
};

export default Certificates;





// import React from "react";

// const Certificates = () => {
//   const certs = [
//     {
//       title: "Introduction to CSS",
//       provider: "Coursera (University of Michigan)",
//       link: "https://coursera.org/share/33bf054e58daa01c5b2d13aca6800a21"
//     },
//     {
//       title: "Introduction to Web Development",
//       provider: "Coursera (University of Michigan)",
//       link: "https://coursera.org/share/5ecc25987dd9497c73429b1f82a1394b"
//     }
//   ];

//   return (
//     <section className="certificates">
//       <h2 className="section-heading">Certificates</h2>
//       <ul className="cert-list">
//         {certs.map((cert, i) => (
//           <li key={i} className="cert-item">
//             <h3>{cert.title}</h3>
//             <p>{cert.provider}</p>
//             <a
//               href={cert.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn btn-ghost"
//             >
//               View Certificate
//             </a>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default Certificates;
