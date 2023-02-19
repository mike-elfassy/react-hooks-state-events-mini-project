import React from "react";

function NewTaskForm({ categories, onTaskFormSubmit, formText, handleFormTextChange, formCategory, handleFormCategoryChange}) {
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={formText}
          onChange={handleFormTextChange}
        />
      </label>
      <label>
        Category
        <select 
          name="category" 
          value={formCategory} 
          onChange={handleFormCategoryChange}
        >
          {/* render <option> elements for each category here */}
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
