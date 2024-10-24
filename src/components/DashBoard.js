import React from 'react';


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="widgets-container">
        <div className="widget">
          <h3>Widget 1</h3>
          <p>Some data here</p>
        </div>
        <div className="widget">
          <h3>Widget 2</h3>
          <p>Some data here</p>
        </div>
        <div className="widget">
          <h3>Widget 3</h3>
          <p>Some data here</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

