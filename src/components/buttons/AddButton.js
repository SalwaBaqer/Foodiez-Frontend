import React, { useState } from "react";

import { AiFillPlusCircle } from "react-icons/ai";
import CreateCategoryModal from "../modals/CreateCategoryModal";

export default function AddButton() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div onClick={openModal} className="add-btn-container">
      <AiFillPlusCircle color="#25d3ea" size="50px" />
      <CreateCategoryModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
}
