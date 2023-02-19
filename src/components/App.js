import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { v4 as uuid } from "uuid";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  // Stateful Variables

  const [tasks, setTasks] = useState(TASKS.map(task => {
    const newTask = {...task, id: uuid()}
    return newTask
  }))
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [formText, setFormText] = useState("")
  const [formCategory, setFormCategory] = useState("Food")

  // Event handler props
  const handleDeleteTask = function(event) {
    const taskNodeId = event.target.parentNode.id
    setTasks(tasks.filter(task => task.id !== taskNodeId))
  }

  const handleCategoryClick = function (event) {
    const category = event.target.id
    setSelectedCategory(category)
    setTasks(TASKS
        .map(task => {
          const newTask = {...task, id: uuid()}
          return newTask
        })
        .filter(task => {
          if (category === "All") return true
          else return task.category === category
        }
    ))
  }

  const handleFormTextChange = function(event) {
    setFormText(event.target.value)
  }
  
  const handleFormCategoryChange = function(event) {
    setFormCategory(event.target.value)
  }

  const onTaskFormSubmit = function(event) {
    event.preventDefault()
    console.log(formText, formCategory)

    let newTasks = TASKS.map(task => {
      const newTask = {...task, id: uuid()}
      return newTask
    })

    newTasks = [...newTasks, {text: formText, category: formCategory, id: uuid() }]

    setTasks(newTasks)
  }

  const newTaskCategories = CATEGORIES.filter(category => category !== "All")


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory} 
        handleCategoryClick={handleCategoryClick}
      />
      <NewTaskForm 
        categories={newTaskCategories} 
        onTaskFormSubmit={onTaskFormSubmit}
        formText={formText} 
        handleFormTextChange={handleFormTextChange}
        formCategory={formCategory}
        handleFormCategoryChange={handleFormCategoryChange}
      />
      <TaskList 
        tasks={tasks} 
        handleDeleteTask={handleDeleteTask} 
      />
    </div>
  );
}

export default App;
