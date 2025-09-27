import React from "react";

export default function DevCard({
  src,
  name = "Michael Doughty",
  title = "Web Developer",
  variant = "halo", // "halo" | "happy" | "ember"
}) {
  return (
    <section className={`dev-card ${variant}`}>
      <div className="pfp">
        <img src={src} alt={`${name} portrait`} />
      </div>

      <div className="dev-meta">
        <h3 className="dev-name">{name}</h3>
        <p className="dev-title">{title}</p>
      </div>
    </section>
  );
}
