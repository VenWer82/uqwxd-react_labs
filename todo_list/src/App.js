import React, { useState, useEffect } from 'react';
import './App.css';
const App = () => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  });
  const [inputValue, setInput] = useState('');
  const [todoEdit, setTodoEdit] = useState(null);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  //Extra Func
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Add the handlesubmit code here
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: inputValue.trim(),
      completed: false,
    };

    if (inputValue !== '') {
      setTodos([...todos, newTodo]);
    } else {
      alert('Please enter a valid task');
    }
    setInput('');
  };

  // Add the deleteToDo code here
  const deleteTodo = (id) => {
    console.log(id);
    let updateTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodo);
  };

  // Add the toggleComplete code here
  const handleCheck = (id) => {
    let updateTodo = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updateTodo);
  };
  // Add the submitEdits code here
  const handleEdit = (id) => {
    let updateTodo = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = document.getElementById(id).value;
      }
      return todo;
    });
    setTodos(updateTodo);
    setTodoEdit(null);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          align="right"
          id="todoAdd"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo, index) => (
        <div key={index} className="todo">
          <div className="todo-text">
            {todo.id === todoEdit ? (
              <input type="text" defaultValue={todo.text} id={todo.id}></input>
            ) : (
              todo.text
            )}
            <input
              type="checkbox"
              id="completed"
              checked={todo.completed}
              onChange={() => handleCheck(todo.id)}
            ></input>
          </div>
          {todo.id === todoEdit ? (
            <button onClick={() => handleEdit(todo.id)}>Save Edit</button>
          ) : (
            <button onClick={() => setTodoEdit(todo.id)}>Edit</button>
          )}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default App;
