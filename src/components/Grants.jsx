import React from 'react'
import { useState } from 'react';
import "../Styling/Grants.css"

const grantData = [
  {
    id: 1,
    title: 'AI for Climate Change',
    status: 'New Grants',
    description: 'Funding for AI-based climate solutions.',
  },
  {
    id: 2,
    title: 'Biomedical Imaging Project',
    status: 'Ongoing Projects',
    description: 'Developing non-invasive imaging technologies.',
  },
  {
    id: 3,
    title: 'Smart Agriculture Initiative',
    status: 'Closed Grants',
    description: 'Completed project on sustainable agriculture.',
  },
];

const categories = ['All', 'New Grants', 'Ongoing Projects', 'Closed Grants'];
const Grants = () => {
  const [filter, setFilter] = useState('All');
  const [interested, setInterested] = useState({});

  const filteredGrants =
    filter === 'All'
      ? grantData
      : grantData.filter((grant) => grant.status === filter);

  const handleInterest = (id) => {
    setInterested((prev) => ({
      ...prev,
      [id]: true,
    }));
  };
  return (
    
    <div className="grant-container">
      <div class="space-background"></div>
      <h2 className="grant-title">Research Grant Projects</h2>

      <div className="grant-filters">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`grant-filter-button ${
              filter === category ? 'active' : ''
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <ul className="grant-list">
        {filteredGrants.map((grant) => (
          <li key={grant.id} className="grant-item">
            <h3 className="grant-item-title">{grant.title}</h3>
            <p className="grant-description">{grant.description}</p>
            <p className="grant-status">Status: {grant.status}</p>
            <button
              onClick={() => handleInterest(grant.id)}
              disabled={interested[grant.id]}
              className={`interest-button ${
                interested[grant.id] ? 'disabled' : ''
              }`}
            >
              {interested[grant.id] ? 'Interest Expressed' : 'Express Interest'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Grants
