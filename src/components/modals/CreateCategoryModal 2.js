import React from "react";
import Modal from "react-modal";

export default function CreateCategoryModal({ modalIsOpen, closeModal }) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>

        <div>I am a modal</div>
        <form>
          <input />
          <button>close</button>
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
