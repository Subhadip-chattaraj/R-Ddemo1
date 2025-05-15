// src/ContactPage.js
import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa'; // Importing icons
import "../Styling/ContactPage.css";

const ContactPage = () => {
  const [contacts] = useState({
    rfmo: {
      name: 'Regional Fisheries Management Organization (RFMO)',
      contactInfo: {
        phone: '+1234567890',
        email: 'info@rfmo.org',
        website: 'https://www.rfmo.org',
      },
    },
    dean: {
      name: 'Dr. John Doe (Dean of Research)',
      contactInfo: {
        phone: '+9876543210',
        email: 'johndoe@institute.edu',
        website: 'https://www.institute.edu',
      },
    },
    associateDean: {
      name: 'Dr. Jane Smith (Associate Dean of Research)',
      contactInfo: {
        phone: '+1122334455',
        email: 'janesmith@institute.edu',
        website: 'https://www.institute.edu',
      },
    },
    spoc: {
      name: 'Mr. Robert Brown (SPOC for R&D)',
      contactInfo: {
        phone: '+9988776655',
        email: 'robertbrown@institute.edu',
        website: 'https://www.institute.edu/spoc',
      },
    },
  });

  const renderContactSection = (contact) => (
    <div className="contact-section">
      <h2 className="contact-title">{contact.name}</h2>
      <p className="contact-detail">
        <FaPhone className="icon" /> <strong>Phone:</strong> {contact.contactInfo.phone}
      </p>
      <p className="contact-detail">
        <FaEnvelope className="icon" /> <strong>Email:</strong>{' '}
        <a href={`mailto:${contact.contactInfo.email}`}>{contact.contactInfo.email}</a>
      </p>
      <p className="contact-detail">
        <FaGlobe className="icon" /> <strong>Website:</strong>{' '}
        <a href={contact.contactInfo.website} target="_blank" rel="noopener noreferrer">
          {contact.contactInfo.website}
        </a>
      </p>
    </div>
  );

  return (
    <div className="contact-container">
      <h1 className="page-title">Contact Information</h1>
      {renderContactSection(contacts.rfmo)}
      <hr className="divider" />
      {renderContactSection(contacts.dean)}
      <hr className="divider" />
      {renderContactSection(contacts.associateDean)}
      <hr className="divider" />
      {renderContactSection(contacts.spoc)}
    </div>
  );
};

export default ContactPage;
