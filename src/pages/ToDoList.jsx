import React, { useState } from 'react'

const ToDoList = () => {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState('')
    
    function addTask() {
        setTasks([...tasks, task])
        setTask('')
    }

  return (
    <div>
      <input 
      type="text" 
      value={task}
      onChange={(e)=> setTask(e.target.value)}
      placeholder='Write your task'
      />
      <button onClick={addTask}>Add Task</button>
    
      <ul>
        {tasks.map((n, index) => (
        <li key={index}>{n}</li>
        ))}
        </ul>

    </div>
  )
}

export default ToDoList
