import React from "react";

const Skeleton = () => {
  return (
    <div className="flex w-106 flex-col gap-4 animate-pulse">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
};

export default Skeleton;
