import React from 'react';

function ToDoList({ todos, removeTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => removeTodo(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
