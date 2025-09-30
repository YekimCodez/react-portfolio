// src/components/Certificates.jsx

import React, { useState } from "react";
import CertificateModal from "./CertificateModal";
import cssCert    from "../assets/intro-to-css-cert.png";
import webDevCert from "../assets/intro-to-web-dev-cert.png";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certs = [
    { title: "Coursera Introduction to CSS (University of Michigan)",             file: cssCert,    type: "image" },
    { title: "Coursera Introduction to Web Development (University of California, Davis)", file: webDevCert, type: "image" },
  ];

  return (
    <section className="certificates">
      <h2 className="section-heading">Certificates</h2>
      <ul className="cert-list">
        {certs.map((cert, i) => (
          <li key={i} className="cert-item">
            <h3>{cert.title}</h3>
            <button className="btn btn-ghost" onClick={() => setSelectedCert(cert)}>
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




