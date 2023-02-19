import React from "react";
import Task from "./Task"

function TaskList({ tasks, handleDeleteTask}) {

  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task key={task.id} id={task.id} text={task.text} category={task.category} handleDeleteTask={handleDeleteTask}/>
      ))}
    </div>
  );
}

export default TaskList;
