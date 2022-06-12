import React from "react";
import FavoriteButton from "../buttons/FavoriteButton";

function CategoryItem({ category }) {
  return (
    <div className="category-item-container">
      <div>
        <FavoriteButton />
        <img src={category.image} className="img-item" />
      </div>
      <p>{category.name}</p>
      <button className="view-reciepe-btn">View Reciepes</button>
    </div>
  );
}

export default CategoryItem;
