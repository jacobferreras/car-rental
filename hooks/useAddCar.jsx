import { addNewCar } from "../services/addNewCar";

const useAddCar = () => {
  const [form, setForm] = useState({
    make: "",
    module: "",
    year: "",
    seats: "",
    transmission: "",
    imageUrl: "",
    status: "",
    pricePerDay: "",
    fuelType: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return <div>useAddCar</div>;
};

export default useAddCar;
