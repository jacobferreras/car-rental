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
        Select Transmission
      </option>
      <option value="MANUAL">Manual Transmission</option>
      <option value="AUTOMATIC">Automatic Transmission</option>
    </select>
  );
};

export default Dropdown;
