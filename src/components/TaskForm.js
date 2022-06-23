import React, { useState } from 'react';
import './TaskForm.css';
import PropTypes from 'prop-types';

const kDefaultFormState = {
  title: '',
  description: '',
};

const TaskForm = ({ onAddTask }) => {
  const [formData, setFormData] = useState(kDefaultFormState);

  const onInput = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = { ...formData, [fieldName]: fieldValue };
    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTask(formData);
    console.log('Handle Submit');
    setFormData(kDefaultFormState);
  };

  return (
    <form className="taskInput" onSubmit={handleSubmit}>
      <h4>Add Task</h4>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={onInput}
      ></input>
      <input type="submit" value="Submit"></input>
    </form>
  );
};

TaskForm.propTypes = {
  onAddTask: PropTypes.func,
};

export default TaskForm;
