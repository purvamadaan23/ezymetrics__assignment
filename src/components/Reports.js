import React from 'react';
import jsPDF from 'jspdf';
import Papa from 'papaparse';

const Reports = () => {
  const data = [
    { name: 'John Doe', email: 'john@example.com', status: 'Completed' },
    { name: 'Jane Smith', email: 'jane@example.com', status: 'Pending' }
    // Add more report data here
  ];

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Reports', 20, 20);
    
    data.forEach((item, index) => {
      doc.text(`${index + 1}. Name: ${item.name}, Email: ${item.email}, Status: ${item.status}`, 20, 30 + (index * 10));
    });

    doc.save('report.pdf');
  };

  const generateCSV = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'report.csv');
    link.click();
  };

  return (
    <div className="reports">
      <h2>Reports</h2>
      <button className="btn btn-pdf" onClick={generatePDF}>Generate PDF</button>
      <button className="btn btn-csv" onClick={generateCSV}>Generate CSV</button>
    </div>
  );
};

export default Reports;

