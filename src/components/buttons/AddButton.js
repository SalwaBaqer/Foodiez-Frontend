import React from "react";

import { AiFillPlusCircle } from "react-icons/ai";
import CreateCategoryModal from "../modals/CreateCategoryModal";

export default function AddButton({openModal}) {
  

  return (
    <div onClick={openModal} className="add-btn-container">
      <AiFillPlusCircle color="#25d3ea" size="50px" />
    
    </div>
  );
}
