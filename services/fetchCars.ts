import axios from "axios";

export const fetchCars = async () => {
  try {
    const response = await axios.get("/api/cars");
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw new Error("Failed to fetch cars");
  }
};
