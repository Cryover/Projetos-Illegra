import "./App.css";
import TaskSaver from "./components/TaskSaver/TaskSaver";
import TaskList from "./components/TaskList/TaskList";
import { useState } from "react";

const App = () => {
  const [list, setList] = useState([]);

  function handleSaveTask(task) {
    let newTaskList = [...list];
    newTaskList.push(task);
    setList(newTaskList);
  }

  function handleDeleteTask(index) {
    let newTaskList = [...list];
    newTaskList.splice(index, 1);
    setList(newTaskList);
  }

  return (
    <div className="App">
      <TaskSaver onSaveTask={handleSaveTask} />
      <TaskList list={list} onDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default App;
