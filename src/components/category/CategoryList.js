import { observer } from "mobx-react";
import React from "react";
import categoryStore from "../../stores/categoryStore";
import CategoryItem from "./CategoryItem";

function CategoryList() {
  const categories = categoryStore.categories.map((category) => (
    <CategoryItem category={category} />
  ));
  return <div className="category-list-container">{categories}</div>;
}

export default observer(CategoryList);
