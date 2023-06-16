import React, { useState } from 'react';
import TaskList from './components/TaskList';
import PomodoroTimer from './components/Timer';
import AnalyticsDashboard from './components/Dashboard';

import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [timerRunning, setTimerRunning] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const completeTask = (taskId) => {
    const task = tasks.find((t) => t.id === taskId);
    setCompletedTasks([...completedTasks, task]);
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  const startTimer = () => {
    setTimerRunning(true);
  };

  const pauseTimer = () => {
    setTimerRunning(false);
  };

  return (
    <div className="container">
      <h1>Todo List App</h1>
      <TaskList tasks={tasks} addTask={addTask} completeTask={completeTask} />
      <PomodoroTimer
        timerRunning={timerRunning}
        startTimer={startTimer}
        pauseTimer={pauseTimer}
      />
      <AnalyticsDashboard
        tasks={completedTasks}
        totalTasks={tasks.length + completedTasks.length}
      />
    </div>
  );
};

export default App;