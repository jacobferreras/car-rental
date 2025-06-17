import axios from "axios";

export const addNewCar = async (carData: {
  make: string;
  model: string;
  year: string | number;
  seats: string | number;
  transmission: string;
  imageUrl: string;
  status: string;
  pricePerDay: string | number;
  fuelType: string;
}) => {
  try {
    const response = await axios.post("/api/cars", carData);
    return response.data;
  } catch (error) {
    console.error("Error adding new car:", error);
    throw new Error("Failed to add new car");
  }
};
