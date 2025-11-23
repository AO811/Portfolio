// src/components/Research.jsx
import React from "react";
import "./Research.css";

const researchItems = [
  {
    id: 1,
    title:
      "Healthcare Analytics: Data Mining Techniques on Electronic Health Records (EHR) to Build a Predictive Model for Early Disease Diagnosis",
    role: "Primary Author",
    guide: "Guided by: Dr. Siddique Ibrahim S. P.",
    venue:
      "International Conference on Sustainable Communication Networks and Application (ICSCN 2025), IEEE ComSoc",
    location: "Bharath Niketan Engineering College, Theni, Tamil Nadu, India",
    year: "2025",
    status: "Presented",
    abstract:
      "This work proposes a Hybrid Disease-Aware Ensemble model for early disease diagnosis using electronic health records. The framework combines Random Forest and XGBoost with disease-specific weights, calibrated probabilities and tuned thresholds to balance sensitivity and specificity across multiple diseases.",
    contributions: [
      "Designed a hybrid ensemble that adapts model weights per disease instead of using a single global meta-learner.",
      "Balanced sensitivity and specificity using disease-specific threshold tuning to reduce false positives in diagnosis.",
      "Built a unified framework capable of predicting multiple diseases from heterogeneous EHR datasets.",
      "Improved reliability of predictions through probability calibration using isotonic regression."
    ],
    tags: [
      "Healthcare Analytics",
      "Machine Learning",
      "Ensemble Models",
      "EHR",
      "Early Disease Diagnosis"
    ],
    links: {
      /*paper: "/assets/Healthcare_Analytics_Paper.pdf",
      certificate: "/assets/ICSCNCertificate.pdf" */
    }
  }
];

const Research = () => {
  return (
    <section id="research" className="research-section">
      <div className="research-container">

        {/* Section Header */}
        <header className="research-header">
          <h2 className="research-title">Research</h2>
        </header>

        {/* Research List */}
        <section className="research-list-section">
          <div className="research-list">
            {researchItems.map((item) => (
              <article key={item.id} className="research-card">
                <div className="research-card-header">
                  <div className="research-card-heading">
                    <h4 className="research-paper-title">{item.title}</h4>

                    <p className="research-paper-meta">
                      {item.role} &middot; {item.venue} &middot; {item.year}
                    </p>

                    <p className="research-paper-location">{item.guide}</p>

                    <p className="research-paper-location">
                      Location: {item.location}
                    </p>
                  </div>

                  <span
                    className={`research-status-badge research-status-${item.status.toLowerCase()}`}
                  >
                    {item.status}
                  </span>
                </div>

                {/* Abstract */}
                <p className="research-abstract">{item.abstract}</p>

                {/* Key Contributions */}
                <div className="research-contributions">
                  <h4 className="research-contributions-title">
                    Key Contributions
                  </h4>
                  <ul className="research-contributions-list">
                    {item.contributions.map((point, index) => (
                      <li key={index} className="research-contribution-item">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="research-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="research-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 🔗 Buttons — open in new tab */}
                <div className="research-links">
                  {item.links.paper && (
                    <a
                      href={item.links.paper}
                      target="_blank"
                      rel="noreferrer"
                      className="research-button research-button-primary"
                    >
                      View Paper
                    </a>
                  )}

                  {item.links.certificate && (
                    <a
                      href={item.links.certificate}
                      target="_blank"
                      rel="noreferrer"
                      className="research-button"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Research;
