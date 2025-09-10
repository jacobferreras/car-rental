import axios from "axios";

const BookingContainer = async () => {
  const data = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/booking/user`
  );
  console.log("User bookings data:", data.data);

  return (
    <>
      <div className="min-h-screen bg-[#111827] px-12 flex justify-center items-center">
        <div className="px-2 py-24">
          <div className="card w-auto bg-[#1f2937] card-xl shadow-sm">
            <div className="card-body gap-4">
              <h1 className="text-center text-4xl font-bold text-white mb-8">
                My Bookings
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingContainer;
