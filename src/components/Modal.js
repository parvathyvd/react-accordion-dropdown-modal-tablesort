import React from "react";
import Panel from "./UI/Panel";
import ReactDOM from "react-dom";

const Modal = ({ showModal, setShowModal }) => {
  const onCloseHanlder = () => {
    setShowModal(false);
  };
  return ReactDOM.createPortal(
    <>
      {showModal && (
        <div className="backdrop" onClick={onCloseHanlder}>
          <div className="modal">
            <Panel>
              <h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
                veritatis!
              </h3>
              <button className="pt-3" onClick={onCloseHanlder}>
                Close
              </button>
            </Panel>
          </div>
        </div>
      )}
    </>,
    document.querySelector(".modal-container")
  );
};

export default Modal;
