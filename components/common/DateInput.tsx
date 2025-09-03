import React from "react";

interface DateInputProps {
  id: string;
}

const DateInput = ({ id }: DateInputProps) => {
  return (
    <div>
      <input
        type="date"
        className="input input-bordered w-full sm:w-54 lg:w-78 bg-[#1f2937]"
        id={id}
      />
    </div>
  );
};

export default DateInput;
