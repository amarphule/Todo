import React, { useState } from 'react'
import "./App.css";

function App() {

  const [task, setTask] = useState("")
  const handleChange = (e) => {
    setTask(e.target.value)
  }

  return (
    <div className="app">
      <h1>Add Task</h1>
      <input type="text" name="task" id="task"
        onChange={handleChange}
      />
      <button type="submit">Add</button>

      {/* Task lists */}
      <div className="list">
        {task}
      </div>
    </div>
  );
}

export default App;
