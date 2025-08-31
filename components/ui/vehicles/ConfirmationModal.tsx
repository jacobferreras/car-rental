import React from "react";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConfirmationModal = ({ isOpen, onClose }: ConfirmationModalProps) => {
  return (
    <dialog
      id="my_modal_5"
      className={`modal modal-bottom sm:modal-middle  ${
        isOpen ? "modal-open" : ""
      }`}
    >
      <div className="modal-box bg-[#1c2634] text-center">
        <h3 className="font-bold text-lg">Booking Confirmed!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action flex justify-center">
          <form method="dialog">
            <button className="btn bg-[#1d4ed8]" onClick={onClose}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ConfirmationModal;
