import React from "react";
import { useState } from "react";

interface AddCarModalProps {
  open: boolean;
  onClose: () => void;
}

const AddCarModal = (props: AddCarModalProps) => {
  if (!props.open) return null;

  return (
    <div className={`modal ${props.open ? "modal-open" : ""}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Please put the car details</h3>
        <div className="flex flex-col justify-center gap-2">
          <input type="text" placeholder="Company" className="input" />
          <input type="text" placeholder="Model" className="input" />
          <input type="text" placeholder="Year" className="input" />
          <input type="text" placeholder="Seats" className="input" />
          <input type="text" placeholder="Transmission" className="input" />
          <input type="text" placeholder="ImageUrl" className="input" />
          <input type="text" placeholder="Status" className="input" />
          <input type="text" placeholder="Price" className="input" />
          <input type="text" placeholder="Fuel Type" className="input" />
        </div>

        <div className="modal-action">
          <button className="btn" onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCarModal;
