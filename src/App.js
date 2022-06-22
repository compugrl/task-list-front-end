import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios';

const kBaseUrl = 'https://task-list-api-c17.herokuapp.com';

const taskApiToJson = (task) => {
  const { description, id, is_complete: isComplete, title } = task;
  return { description, id, isComplete, title };
};

const getTaskData = () => {
  return axios
    .get(`${kBaseUrl}/tasks`)
    .then((response) => {
      return response.data.map(taskApiToJson);
    })
    .catch((err) => {
      console.log(err);
    });
};

function App() {
  const [taskData, setTaskData] = useState([]);

  const updateTasks = () => {
    getTaskData().then((tasks) => {
      setTaskData(tasks);
    });
  };

  useEffect(() => {
    updateTasks();
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
