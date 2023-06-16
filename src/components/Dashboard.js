import React from 'react';
import './Dashboard.css';

const AnalyticsDashboard = ({ tasks, totalTasks }) => {
  const completedTasksCount = tasks.length;
  const completionRate = totalTasks > 0 ? (completedTasksCount / totalTasks) * 100 : 0;

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Analytics Dashboard</h2>
      <p className="dashboard-metric">
        <span className="dashboard-metric-label">Total Tasks:</span> {totalTasks}
      </p>
      <p className="dashboard-metric">
        <span className="dashboard-metric-label">Completed Tasks:</span> {completedTasksCount}
      </p>
      <p className="dashboard-metric">
        <span className="dashboard-metric-label">Completion Rate:</span>{' '}
        <span className="dashboard-metric-value">{completionRate.toFixed(2)}%</span>
      </p>
    </div>
  );
};

export default AnalyticsDashboard;