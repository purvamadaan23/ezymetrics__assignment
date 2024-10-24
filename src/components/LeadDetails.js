import React from 'react';
import './LeadDetails.css';

const LeadDetails = ({ lead }) => {
  return (
    <div className="lead-details">
      <h3>Lead Details</h3>
      <p><strong>Name:</strong> {lead.name}</p>
      <p><strong>Email:</strong> {lead.email}</p>
      <p><strong>Status:</strong> {lead.status}</p>
      <button>Close</button>
    </div>
  );
};

export default LeadDetails;
