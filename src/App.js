import React, { useState } from 'react'
import "./App.css";
import TodoLists from './TodoLists';

function App() {

  const [task, setTask] = useState("")
  const [lists, setLists] = useState([])

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const handleClick = () => {
    setLists((oldItems) => {
      return [...oldItems, task]
    })
    setTask("")
  }
  const deleteItem = (id) => {
    setLists((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id
      })
    })
  }

  return (
    <div className="mainContainer">
      <div className="app">
        <br />
        <h1>Add Tasks</h1>
        <br />
        <input type="text" name="task"
          value={task}
          placeholder="Add Task here..."
          onChange={handleChange} id="task" />
        <button type="submit" onClick={handleClick}>+</button>

        {/* Task lists */}
        <div className="list">
          <ol>
            {lists.map((item, index) => {
              return (
                <TodoLists
                  key={index}
                  text={item}
                  id={index}
                  deleteItem={deleteItem} />
              )
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
