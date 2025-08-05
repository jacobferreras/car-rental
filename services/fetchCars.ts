import axios from "axios";

interface Car {
  type?: string;
  transmission?: string;
  limit?: number;
  page?: number;
  search?: string;
}

export const fetchCars = async (props: Car) => {
  try {
    const params = new URLSearchParams();

    if (props.type) params.append("type", props.type);
    if (props.transmission) params.append("transmission", props.transmission);
    if (props.limit) params.append("limit", props.limit.toString());
    if (props.page) params.append("page", props.page.toString());
    if (props.search) params.append("search", props.search);

    const response = await axios.get("/api/cars", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw new Error("Failed to fetch cars");
  }
};
