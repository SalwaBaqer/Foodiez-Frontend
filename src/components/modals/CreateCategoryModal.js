import React, { useState } from "react";
import Modal from "react-modal";

export default function CreateCategoryModal({ modalIsOpen, closeModal }) {
const [category, setCategory] = useState(null)
 const handleChange = (e)=>{
setCategory({...category, [e.target.name]: e.target.value})
 }


  const handleSubmit = (e) =>{
  e.preventDefault()
  console.log({category})
  closeModal()
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <div className="margin-20">
            <div className="label-wrapper">
            <label className="label-style">Category</label>
            </div>
          <input name="name" onChange={handleChange} required className="input-width-200"/>
          </div>
          <div className="margin-20">
          <div className="label-wrapper">
          <label className="label-style">Image</label>
          </div>
          <input image="image" type="file" className="input-width-200"/>
          </div>
          <div className="btns-container">
          <button className="btn-cool" type="submit">Add</button>
          <button className="btn-cancel" onClick={closeModal} >Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
