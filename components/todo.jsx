import React, { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() === '') {
      return;
    }

    const newId = todos.length;
    const newTodoItem = {
      id: newId,
      description: newTodo
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo </h1>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Enter a new todo"
      />
      <button onClick={handleAddTodo}>Add Task</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.description}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
