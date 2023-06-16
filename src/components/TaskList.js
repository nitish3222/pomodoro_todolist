import React, { useState } from 'react';
import './TaskList.css';

const TaskList = ({ tasks, addTask, completeTask }) => {
  const [taskInput, setTaskInput] = useState('');

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskInput.trim() !== '') {
      const task = {
        id: Date.now(),
        description: taskInput.trim(),
      };
      addTask(task);
      setTaskInput('');
    }
  };

  const handleCompleteTask = (taskId) => {
    completeTask(taskId);
  };

  return (
    <div className="task-list-container">
      <h2 className="task-list-heading">Task List</h2>
      <form className="task-form" onSubmit={handleAddTask}>
        <input
          className="task-input"
          type="text"
          value={taskInput}
          onChange={handleInputChange}
        />
        <button className="add-task-button" type="submit">
          Add Task
        </button>
      </form>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <span className="task-description">{task.description}</span>
            <button
              className="complete-button"
              onClick={() => handleCompleteTask(task.id)}
            >
              Complete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;