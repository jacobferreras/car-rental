import React from "react";

const Skeleton = () => {
  return (
    <div className="flex w-80 lg:w-106 flex-col gap-8 animate-pulse">
      <div className="skeleton h-56 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-8 w-32"></div>
    </div>
  );
};

export default Skeleton;
