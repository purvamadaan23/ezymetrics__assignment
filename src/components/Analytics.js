import React, { useEffect, useRef } from 'react';
import { Chart, BarController, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary Chart.js components
Chart.register(BarController, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analytics = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    
    // Destroy the previous chart instance to avoid canvas reuse issues
    let chartInstance;
    if (chartInstance) {
      chartInstance.destroy();
    }

    // Create the new chart
    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Sales',
            data: [50, 60, 70, 80, 90],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Monthly Sales Data'
          },
          legend: {
            position: 'top'
          }
        },
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Cleanup function to destroy the chart on unmount
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default Analytics;
