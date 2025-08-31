import axios from "axios";

export const bookCar = async (
  carId: number,
  carName: string,
  firstName: string,
  lastName: string,
  startDate: Date,
  endDate: Date
) => {
  try {
    const response = await axios.post("/api/booking", {
      carId,
      carName,
      firstName,
      lastName,
      startDate,
      endDate,
    });
    return response.data;
  } catch (error) {
    console.error("Error booking car:", error);
    throw error;
  }
};
