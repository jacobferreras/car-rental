import axios from "axios";

export const fetchBooking = async () => {
  try {
    const response = await axios.get("/api/booking/user");
    return response.data;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw error;
  }
};
