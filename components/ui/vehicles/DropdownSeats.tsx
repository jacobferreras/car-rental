"use client";

interface DropdownProps {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown = (props: DropdownProps) => {
  return (
    <select
      value={props.value}
      onChange={props.onChange}
      className="select rounded-xl font-normal mr-5 w-68 lg:w-50 bg-neutral-700 text-white"
    >
      <option value="" className="text-white">
        Car Type
      </option>
      <option value="SEDAN">Sedan</option>
      <option value="SUV">SUV</option>
      <option value="HATCHBACK">Hatchback</option>
      <option value="COUPE">Coupe</option>
      <option value="CONVERTIBLE">Convertible</option>
      <option value="PICKUP">Pickup</option>
      <option value="VAN">Van</option>
    </select>
  );
};

export default Dropdown;
