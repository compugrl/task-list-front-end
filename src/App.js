import React, { useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

function App() {
  const [taskData, setTaskData] = useState([
    {
      id: 1,
      title: 'Mow the lawn',
      isComplete: false,
    },
    {
      id: 2,
      title: 'Cook Pasta',
      isComplete: true,
    },
  ]);

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
