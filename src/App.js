import React, { useState } from 'react';
import TodoList from './ToDoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Mark Your Attendance</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your Name and RollNo in the format : Smriti; 102116094"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;

