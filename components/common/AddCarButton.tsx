"use client";
import { useEffect, useState } from "react";

export const AddCarButton = () => {
  const [isGranted, setIsGranted] = useState(false);

  useEffect(() => {
    fetch("/api/permission")
      .then((res) => res.json())
      .then((data) => setIsGranted(data.isGranted));
  }, []);
  return (
    <div>
      {isGranted ? <button className="btn btn-neutral">Add Car</button> : null}
    </div>
  );
};
