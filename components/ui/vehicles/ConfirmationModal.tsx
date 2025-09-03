import React from "react";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: string;
  cardata: {
    make: string;
    model: string;
  };
  bookingData: {
    firstName: string;
    lastName: string;
    startDate: string;
    endDate: string;
  };
}

const ConfirmationModal = ({
  isOpen,
  onClose,
  user,
  cardata,
  bookingData,
}: ConfirmationModalProps) => {
  return (
    <dialog
      id="my_modal_5"
      className={`modal modal-bottom sm:modal-middle  ${
        isOpen ? "modal-open" : ""
      }`}
    >
      <div className="modal-box bg-[#1c2634] text-center">
        <h3 className="font-bold text-lg">Booking Confirmed!</h3>
        <p className="py-4">
          {`Thank you for your booking, ${bookingData.firstName} ${bookingData.lastName}! Your request for ${cardata.make} ${cardata.model} from ${bookingData.startDate} to ${bookingData.endDate} has been received. 
          A confirmation email has been sent to at ${user}.`}
        </p>
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
