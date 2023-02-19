import React from "react";

function Task({ id, text, category, handleDeleteTask}) {
  return (
    <div className="task" id={id}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteTask}>X</button>
    </div>
  );
}

export default Task;
