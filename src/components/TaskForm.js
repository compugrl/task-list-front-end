import React, { useState } from 'react';

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
    <>
      <h3>Add Task</h3>
      <input
        type="text"
        className="taskInput"
        name="taskTitle"
        value={taskName}
        onChange={onInput}
      ></input>
      <input type="submit" value="Submit"></input>
    </>
  );
};

export default TaskForm;
