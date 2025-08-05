import axios from "axios";

export const addNewCar = async (carData: {
  make: string;
  model: string;
  year: string | number;
  type: string;
  transmission: string;
  imageUrl: string;
  status: string;
  pricePerDay: string | number;
  fuelType: string;
}) => {
  try {
    const payload = {
      ...carData,
      year: Number(carData.year),
      type: carData.type,
      pricePerDay: Number(carData.pricePerDay),
    };
    const response = await axios.post("/api/cars", payload);
    return response.data;
  } catch (error) {
    console.error("Error adding new car:", error);
    throw new Error("Failed to add new car");
  }
};
