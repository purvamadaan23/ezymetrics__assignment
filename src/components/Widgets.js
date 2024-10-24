import React from 'react';

const Widgets = ({ title, data }) => {
  return (
    <div className="widget">
      <h3>{title}</h3>
      <p>{data}</p>
    </div>
  );
};

export default Widgets;
