import axios from "axios";

interface Car {
  seats?: number;
  transmission?: string;
  limit?: number;
  page?: number;
}

export const fetchCars = async (props: Car) => {
  try {
    const params = new URLSearchParams();

    if (props.seats) params.append("seats", props.seats.toString());
    if (props.transmission) params.append("transmission", props.transmission);
    if (props.limit) params.append("limit", props.limit.toString());
    if (props.page) params.append("page", props.page.toString());

    const response = await axios.get("/api/cars", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw new Error("Failed to fetch cars");
  }
};
