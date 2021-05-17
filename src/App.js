import React, {useState, useEffect} from 'react';
import './App.css';

// Importing Components 
import {Todo_Form} from './Components/form';
import {TodoList} from './Components/todo_list'

export function App() {
  // States
  const [InputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('');
  const [filteredTodos, setFilteredTodos] = useState([]);

  // UseEffect
  useEffect( () => {
    filterHandler();
  }, [todos, status]);
  // Functions

  const filterHandler = () => {
    switch(status){
      case 'completed': 
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted': 
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Timothy Todo List</h1>
      </header>
    <Todo_Form setTodos={setTodos} todos={todos} InputText={InputText} setInputText={setInputText} setStatus={setStatus} />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
