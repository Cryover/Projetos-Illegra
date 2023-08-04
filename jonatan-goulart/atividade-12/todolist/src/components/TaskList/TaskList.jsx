const TaskList = ({ list, onDeleteTask }) => {
  return (
    <div className="divTasks">
      <ul>
        {list.map((task, index) => (
          <li key={index}>
            <input type="checkbox" value={task} />
            <label htmlFor={task}>{task}</label>
            <button onClick={() => onDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
