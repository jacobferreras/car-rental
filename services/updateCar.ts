import axios from "axios";

export const updateCar = async (
  carId: Number | string,
  carData: {
    make: string;
    model: string;
    year: string | number;
    seats: string | number;
    transmission: string;
    imageUrl: string;
    status: string;
    pricePerDay: string | number;
    fuelType: string;
  }
) => {
  try {
    const payload = {
      id: carId,
      ...carData,
      year: Number(carData.year),
      seats: Number(carData.seats),
      pricePerDay: Number(carData.pricePerDay),
    };
    const response = await axios.patch(`/api/cars`, payload);
    return response.data;
  } catch (error) {
    console.error("Error updating car:", error);
    throw new Error("Failed to update car");
  }
};
