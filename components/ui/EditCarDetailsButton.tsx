import { useState, useEffect, use } from "react";

interface EditCarDetailsButtonProps {
  onClick?: () => void;
}

const EditCarDetailsButton = (props: EditCarDetailsButtonProps) => {
  const [isGranted, setIsGranted] = useState(false);

  useEffect(() => {
    fetch("/api/permission")
      .then((res) => res.json())
      .then((data) => setIsGranted(data.isGranted));
  }, []);
  return (
    <div>
      {isGranted ? (
        <button className="btn btn-primary  text-white" onClick={props.onClick}>
          Update Car Details
        </button>
      ) : null}
    </div>
  );
};

export default EditCarDetailsButton;
