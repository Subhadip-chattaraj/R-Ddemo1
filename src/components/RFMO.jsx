import React, { useState } from 'react';
import '../Styling/RFMO.css';
import { FaSeedling, FaChartLine, FaFileAlt } from 'react-icons/fa';

const RFMO = () => {
  const [activeTab, setActiveTab] = useState('seed');

  return (
    <div className="rfmo-container">
      <h1 className="rfmo-title">RFMO Section</h1>

      <div className="rfmo-tabs">
        <button
          className={`rfmo-tab ${activeTab === 'seed' ? 'active' : ''}`}
          onClick={() => setActiveTab('seed')}
        >
          <FaSeedling className="rfmo-icon" />
          <span>Seed Funding</span>
        </button>
        <button
          className={`rfmo-tab ${activeTab === 'quarterly' ? 'active' : ''}`}
          onClick={() => setActiveTab('quarterly')}
        >
          <FaChartLine className="rfmo-icon" />
          <span>Quarterly Evaluation</span>
        </button>
        <button
          className={`rfmo-tab ${activeTab === 'forms' ? 'active' : ''}`}
          onClick={() => setActiveTab('forms')}
        >
          <FaFileAlt className="rfmo-icon" />
          <span>Forms</span>
        </button>
      </div>

      <div className="rfmo-content">
        {activeTab === 'seed' && (
          <div className="rfmo-card">
            <h2>Seed Funding & Evaluation Process</h2>
            <p>
              Learn about available seed funding, eligibility criteria, application procedures,
              and evaluation timelines. Funding is reviewed by a committee quarterly based on
              innovation, impact, and feasibility.
            </p>
          </div>
        )}

        {activeTab === 'quarterly' && (
          <div className="rfmo-card">
            <h2>Quarterly Evaluation & Reporting Guidelines</h2>
            <p>
              Projects must submit evaluation reports every quarter. Use the official template and
              include progress metrics, challenges, and next steps. Reports are due by the 10th of
              the month following each quarter.
            </p>
          </div>
        )}

        {activeTab === 'forms' && (
          <div className="rfmo-card">
            <h2>Project Forms</h2>
            <ul>
              <li><a href="/forms/proposal.pdf" target="_blank" rel="noopener noreferrer">Project Proposal Form</a></li>
              <li><a href="/forms/progress-report.pdf" target="_blank" rel="noopener noreferrer">Progress Report Form</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default RFMO;
