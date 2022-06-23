import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = () => {
  const [taskName, setTaskName] = useState('Enter task title');

  const onInput = (event) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // onCatDataReady(formData);

    setTaskName('Enter task title');
  };

  return (
    <section className="taskInput">
      <h4>Add Task</h4>
      <input
        type="text"
        name="taskTitle"
        value={taskName}
        onChange={onInput}
      ></input>
      <input type="submit" value="Submit"></input>
    </section>
  );
};

export default TaskForm;
