import React, { useState } from 'react';
import './App.css';
import data from './data.json';
import { nanoid } from 'nanoid';

import Header from './components/Header';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : {...task}
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    })
    setToDoList(filtered);
  };
  
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, {
      id: nanoid(),
      task: userInput,
      complete: false
    }];
    setToDoList(copy);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList 
        toDoList={toDoList} 
        handleToggle={handleToggle} 
        handleFilter={handleFilter} 
      />
      <ToDoForm addTask={addTask} />
    </div>

  );
}

export default App;
