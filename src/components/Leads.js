import React from 'react';


const Leads = () => {
  const dummyLeads = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' }
    // Add more dummy leads here
  ];

  return (
    <div className="leads-container">
      <h1>Leads</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {dummyLeads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leads;


