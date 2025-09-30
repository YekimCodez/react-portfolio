import React from "react";

const CertificateModal = ({ isOpen, onClose, cert }) => {
  if (!isOpen || !cert) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>
        <h3>{cert.title}</h3>
        {/* If PDF: use iframe, if image: use img */}
        <img
          src={cert.file}
          title={cert.title}
          className="cert-frame"
        />
      </div>
    </div>
  );
};

export default CertificateModal;
