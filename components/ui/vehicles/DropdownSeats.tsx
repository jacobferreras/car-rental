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
      className="select rounded-xl font-normal mr-5 w-50 bg-neutral-700 text-white"
    >
      <option value="" className="text-white">
        All Seats
      </option>
      <option value="2">2 Seater</option>
      <option value="4">4 Seater</option>
      <option value="5">5 Seater</option>
      <option value="7">7 Seater</option>
    </select>
  );
};

export default Dropdown;
