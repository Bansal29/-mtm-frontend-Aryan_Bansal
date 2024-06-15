import React, { useState } from "react";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [newTask, setNewTask] = useState("");

  const handleEdit = (index) => {
    setEditingIndex(index);
    setNewTask(tasks[index]);
  };

  const handleUpdate = (index) => {
    updateTask(index, newTask);
    setEditingIndex(null);
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {editingIndex === index ? (
            <div>
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button onClick={() => handleUpdate(index)}>Update</button>
            </div>
          ) : (
            <div>
              <span>{task}</span>
              <button onClick={() => handleEdit(index)}>Edit</button>
            </div>
          )}
          <button className="deletebtn" onClick={() => deleteTask(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
