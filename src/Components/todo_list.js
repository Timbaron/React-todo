import React from 'react';

// Import Todo 
import Todo from './Todo';

export function TodoList({todos,setTodos, filteredTodos}) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
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