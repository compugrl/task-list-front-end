import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';
import axios from 'axios';

const TaskList = (props) => {
  const taskListJSX = props.taskArray.map((task) => {
    return (
      <Task
        key={task.id}
        id={task.id}
        title={task.title}
        isComplete={task.isComplete}
        onUpdate={props.onUpdateTask}
        onDelete={props.onDeleteTask}
      />
    );
  });

  return <ul className="tasks__list no-bullet">{taskListJSX}</ul>;
};

TaskList.propTypes = {
  taskArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ),
  onUpdateTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default TaskList;
