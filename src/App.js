import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios';

function App() {
  const [taskData, setTaskData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const getTaskData = () => {
    axios
      .get('https://task-list-api-c17.herokuapp.com/tasks')
      .then((response) => {
        setTaskData(response.data);
      })
      .catch((error) => {
        setErrorMessage(<section>{error.response.data}</section>);
      });
  };

  useEffect(() => {
    getTaskData();
    console.log(taskData);
  }, []);

  const updateTaskData = (updatedTask) => {
    const tasks = taskData.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      } else {
        return task;
      }
    });

    setTaskData(tasks);
  };

  const deleteTaskData = (deletedTask) => {
    const tasks = taskData.filter((task) => task.id !== deletedTask.id);
    setTaskData(tasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
        {errorMessage}
      </header>
      <main>
        <div>
          <TaskList
            taskArray={taskData}
            onUpdateTask={updateTaskData}
            onDeleteTask={deleteTaskData}
          ></TaskList>
        </div>
      </main>
    </div>
  );
}

export default App;
