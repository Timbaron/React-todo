import React, {useState} from 'react';
import './App.css';

// Importing Components 
import {Todo_Form} from './Components/form';
import {TodoList} from './Components/todo_list'

export function App() {
  const [InputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Timothy Todo List</h1>
      </header>
    <Todo_Form setTodos={setTodos} todos={todos} InputText={InputText} setInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;
