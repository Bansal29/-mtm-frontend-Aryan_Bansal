import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (index, newTask) => {
    const updatedTasks = tasks.map((task, i) => (i === index ? newTask : task));
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
  };

  return (
    <div className="App">
      <h1>My Itinerary Planner - TripMates</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
