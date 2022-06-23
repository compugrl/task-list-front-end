import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios';

const kBaseUrl = 'https://task-list-api-c17.herokuapp.com/tasks';

const taskApiToJson = (task) => {
  const { description, id, is_complete: isComplete, title } = task;
  return { description, id, isComplete, title };
};

const getTaskData = () => {
  return axios
    .get(`${kBaseUrl}`)
    .then((response) => {
      return response.data.map(taskApiToJson);
    })
    .catch((err) => {
      console.log(err);
    });
};

function App() {
  const [taskData, setTaskData] = useState([]);

  const loadTasks = () => {
    getTaskData().then((tasks) => {
      setTaskData(tasks);
    });
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const completeTask = (id) => {
    taskData.map((task) => {
      if (task.id === id) {
        axios
          .patch(`${kBaseUrl}/${id}/mark_complete`)
          .then(() => loadTasks())
          .catch((err) => console.log(err));
      }
      return task;
    });
  };

  const incompleteTask = (id) => {
    taskData.map((task) => {
      if (task.id === id) {
        axios
          .patch(`${kBaseUrl}/${id}/mark_incomplete`)
          .then(() => loadTasks())
          .catch((err) => console.log(err));
      }
      return task;
    });
  };

  const onButtonClick = (updatedTask) => {
    if (updatedTask.isComplete === false) {
      completeTask(updatedTask.id);
    } else {
      incompleteTask(updatedTask.id);
    }
  };

  const deleteTaskData = (deletedTask) => {
    taskData.map((task) => {
      if (task.id === deletedTask.id) {
        axios
          .delete(`${kBaseUrl}/${task.id}`)
          .then(() => loadTasks())
          .catch((err) => console.log(err));
      }
      return task;
    });
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
            onUpdateTask={onButtonClick}
            onDeleteTask={deleteTaskData}
          ></TaskList>
        </div>
      </main>
    </div>
  );
}

export default App;
