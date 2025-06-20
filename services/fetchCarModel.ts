import axios from "axios";

export const fetchCarModel = async (model: string) => {
  try {
    const response = await axios.get(`/api/cars/${model}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching car model:", error);
    throw new Error("Failed to fetch car model");
  }
};
