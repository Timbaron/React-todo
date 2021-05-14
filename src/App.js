import React from 'react';
import './App.css';

// const [list, setList] = useState([]);

function addTodo(){
  alert('Changed!!!');
}

export function App() {
  return (
    <div className="App">
      <div className="todo">
        <form>
          <div className="input">
            <input type="text" id="todo" required autoFocus/>
            <button onChange={addTodo}>Add</button>
          </div>
        </form>
        <div className="display">
          
        </div>
      </div>
    </div>
  );
}

export default App;
