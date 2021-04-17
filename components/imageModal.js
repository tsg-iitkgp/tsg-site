import Modal from "react-modal";
import { useState } from "react";

export default function ImageModal(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="image-container">
      <img className="main-image" src={props.images} onClick={handleModalOpen} />

      <Modal isOpen={modalIsOpen} onRequestClose={handleModalClose} contentLabel="Image description">
        <h1> {props.title} </h1>

        {/* {props.images.map((image) => ( */}
        <img className="modal-image" src={props.images} />
        {/* ))} */}

        <p>{props.description}</p>
      </Modal>
    </div>
  );
}
