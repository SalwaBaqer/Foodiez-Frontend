import React, { useState } from "react";
import { observer } from "mobx-react";
import categoryStore from "../../stores/categoryStore";
//components
import AddButton from "../buttons/AddButton";
import CategoryItem from "./CategoryItem";
import CreateCategoryModal from "../modals/CreateCategoryModal"

function CategoryList() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const categories = categoryStore.categories.map((category) => (
    <CategoryItem category={category} key={category._id} />
  ));
  return (
    <div>
      <AddButton openModal={openModal} />
      <CreateCategoryModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <div className="category-list-container">{categories}</div>
    </div>
  );
}

export default observer(CategoryList);
