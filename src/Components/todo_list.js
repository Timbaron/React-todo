import React from 'react';

// Import Todo 
import Todo from './Todo';

export function TodoList({todos,setTodos}) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo setTodos={setTodos}
                     todos={todos}
                     text={todo.text}
                     todo={todo}
                     id={todo.id}/>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;