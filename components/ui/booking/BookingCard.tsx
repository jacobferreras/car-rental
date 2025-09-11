interface BookingCardProps {
  id?: number;
  email: string;
  carMake: string;
  carModel: string;
  startDate: Date;
  endDate: Date;
  firstName: string;
  lastName: string;
  status: string;
}

const BookingCard = ({
  email,
  carMake,
  carModel,
  startDate,
  endDate,
  firstName,
  lastName,
  status,
}: BookingCardProps) => {
  return (
    <>
      <div className="card w-auto bg-[#1f2937] card-lg shadow-sm mx-auto">
        <div className="card-body text-white px-4 py-6 sm:px-6 sm:py-8">
          <h2 className="text-xl sm:text-2xl text-[#60a5e7] font-extrabold mb-2">
            {carMake} {carModel}
          </h2>
          <h3 className="break-words">
            <b>Email:</b> {email}
          </h3>
          <p>
            <b>Start Date:</b> {new Date(startDate).toLocaleDateString()}
          </p>
          <p>
            <b>End Date:</b> {new Date(endDate).toLocaleDateString()}
          </p>
          <p>
            <b>Client:</b> {firstName} {lastName}
          </p>
          <p>
            <b>Status:</b> {status}
          </p>
        </div>
      </div>
    </>
  );
};

export default BookingCard;
