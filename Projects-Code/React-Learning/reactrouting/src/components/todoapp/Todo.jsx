import React, { useState } from "react";
import "./Todo.css"
const Todo = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTask] = useState([]);

  const handleAddTask = () => {
    const text = taskInput.trim();
    if (!text) {
      return;
    } else {
      const newTask = {
        id: Date.now(),
        name: text,
      };
      setTask([...tasks, newTask]);
      setTaskInput("");
    }
  };
  const handleDelete = (id) => {
    const updated = tasks.filter((task) => task.id != id);
    setTask(updated);
  };

  const handleEdit=(id)=>{
   const tasktoEdit=tasks.find((task)=>task.id===id);
   

  }

  console.log("task", tasks);

  return (
    <div className="todo">
      <h1>Simple Todo App</h1>
      <div className="input-row">
        <input
          type="text"
          placeholder="Enter task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button className="btn add-btn" onClick={handleAddTask}>Add</button>
      </div>
      {/* Todo Table */}
      {tasks.length === 0 ? (
        <p className="empty-text">No task Added</p>
      ) : (
        <table className="task-table">
          <thead>
            <th>Id</th>
            <th>Task</th>
            <th>Done?</th>
            <th>Action</th>
          </thead>
          {tasks.map((task, index) => (
           <tbody key={index+1}>
             <tr>
              <td>{index + 1}</td>
              <td>{task.name}</td>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <button onClick={()=>handleEdit(task.id)} className="btn edit-btn">Edit</button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="btn delete-btn"
                >
                  Delete
                </button>
              </td>
            </tr>
           </tbody>
          ))}
        </table>
      )}
    </div>
  );
};

export default Todo;
