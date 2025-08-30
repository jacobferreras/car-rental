import React from "react";

const BookingModal = () => {
  return (
    <fieldset className="fieldset bg-[#1a202c] border-base-300 rounded-box w-xs border p-4">
      <legend className="fieldset-legend">Page details</legend>

      <label className="label">Car Model</label>
      <input type="text" className="input" placeholder="My awesome page" />

      <label className="label">First Name</label>
      <input type="text" className="input" placeholder="my-awesome-page" />

      <label className="label">Last Name</label>
      <input type="text" className="input" placeholder="Doe" />

      <label className="label">Author</label>
      <input type="text" className="input" placeholder="Name" />
    </fieldset>
  );
};

export default BookingModal;
