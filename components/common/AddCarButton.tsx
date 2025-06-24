"use client";
import { useEffect, useState } from "react";
import useCards from "@/hooks/useCards";
import AddCarModal from "./AddCarModal";

interface AddCarButtonProps {
  onClick?: () => void;
}

export const AddCarButton = (props: AddCarButtonProps) => {
  const [isGranted, setIsGranted] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const {} = useCards({
    refresh,
  });

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
          onClick={() => setOpenModal(true)}
        >
          Add Car
        </button>
      ) : null}

      <div>
        <AddCarModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          onSuccess={() => {
            setRefresh((prev) => prev + 1);
            setOpenModal(false);
          }}
        />
      </div>
    </div>
  );
};
