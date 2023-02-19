import React from "react";

function CategoryFilter({ categories, selectedCategory, handleCategoryClick }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map(category => (
        <button 
          key={category} 
          id={category} 
          onClick={handleCategoryClick} 
          className={category === selectedCategory ? "selected" : ""}
          >
          {category}
          </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
