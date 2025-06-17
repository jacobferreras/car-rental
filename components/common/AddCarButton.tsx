"use client";
import { useEffect, useState } from "react";

interface AddCarButtonProps {
  onClick?: () => void;
}

export const AddCarButton = (props: AddCarButtonProps) => {
  const [isGranted, setIsGranted] = useState(false);

  useEffect(() => {
    fetch("/api/permission")
      .then((res) => res.json())
      .then((data) => setIsGranted(data.isGranted));
  }, []);
  return (
    <div>
      {isGranted ? (
        <button
          className="btn bg-neutral-700 rounded-xl text-white"
          onClick={props.onClick}
        >
          Add Car
        </button>
      ) : null}
    </div>
  );
};
