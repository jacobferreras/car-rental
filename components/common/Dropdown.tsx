"use client";

interface DropdownProps {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string;
  options1: string;
  options2: string;
  options3?: string;
  options4?: string;
  placeholder1?: string;
  placeholder2?: string;
  placeholder3?: string;
  placeholder4?: string;
  desriptions?: string[];
}

const Dropdown = (props: DropdownProps) => {
  return (
    <select
      value={props.value}
      onChange={props.onChange}
      className="select rounded-xl font-normal mr-5 w-50 bg-neutral-700 text-white"
    >
      <option value="" className="text-white">
        {props.options}
      </option>
      <option value={props.placeholder1}>{props.options1}</option>
      <option value={props.placeholder2}>{props.options2}</option>
      <option value={props.placeholder3}>{props.options3}</option>
      <option value={props.placeholder4}>{props.options4}</option>
    </select>
  );
};

export default Dropdown;
