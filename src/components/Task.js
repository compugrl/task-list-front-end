import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  const onCompleteTaskClick = () => {
    const updatedTask = {
      id: props.id,
      title: props.title,
      isComplete: !props.isComplete,
    };

    props.onUpdate(updatedTask);
  };

  const onDeleteTaskClick = () => {
    const deletedTask = {
      id: props.id,
    };
    props.onDelete(deletedTask);
  };

  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={onCompleteTaskClick}
      >
        {props.title}
      </button>
      <button
        className="tasks__item__remove button"
        onClick={onDeleteTaskClick}
      >
        x
      </button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
