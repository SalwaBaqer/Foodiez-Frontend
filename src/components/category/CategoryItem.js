import React from "react";

function CategoryItem({ category }) {
  return (
    <div className="category-item-container">
      <img src={category.image} className="img-item" />
      <p>{category.name}</p>
    </div>
  );
}

export default CategoryItem;
