"use client";
import { useEffect, useState } from "react";
import useCards from "@/hooks/useCards";
import AddCarModal from "./AddCarModal";

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
          className="btn bg-neutral-700 rounded-xl text-white md:text-sm w-25"
          onClick={props.onClick}
        >
          Add Car
        </button>
      ) : null}
    </div>
  );
};
