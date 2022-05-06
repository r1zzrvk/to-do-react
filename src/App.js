import React, { useEffect, useState } from "react";
import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import './App.css';

function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    const statusHandler = () => {
      switch (filter) {
        case 'completed':
          setFiltered(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFiltered(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFiltered(todos);
          break;
      }
    };
    statusHandler();
    saveLocalTodos();
  }, [todos, filter]);

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }

  return (
    <div>
      <Header />
        <div> 
            <Content
              inputText={inputText}
              setInputText={setInputText}
              setTodos={setTodos}
              todos={todos}
              setFilter={setFilter}
              filtered={filtered} />
        </div>
    </div>
  );
}
export default App;
