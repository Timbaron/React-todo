import React from 'react';

export function Todo_Form({setInputText,todos,setTodos,InputText}) {
    const inputFormHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos(
            [
                {text:InputText, completed:false, id:Math.random() * 1000}
            ]
        )
        setInputText('');
    }
    return (
        <form>
            <input value={InputText} onChange={inputFormHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
            <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
            </div>
        </form>
    );
}

export default Todo_Form;