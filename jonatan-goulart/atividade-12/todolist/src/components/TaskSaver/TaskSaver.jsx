import React, { useState, useRef } from "react";

const TaskSaver = ({ onSaveTask }) => {
  const [task, setTask] = useState("");
  const ref = useRef(null);

  const handleSaveTask = (event) => {
    event.preventDefault();
    if (ref.current.value !== "") {
      onSaveTask(task);
      ref.current.value = "";
    } else {
      alert("You need to type a task to save it on the list!");
    }
  };

  return (
    <form className="formMain">
      <label htmlFor="inputTaskName">Task name:</label>
      <input
        ref={ref}
        type="text"
        className="inputTaskName"
        placeholder="Write Task here"
        onChange={(e) => setTask(e.target.value)}
      />
      <input onClick={handleSaveTask} type="submit" value="Adicionar Task" />
    </form>
  );
};

export default TaskSaver;
