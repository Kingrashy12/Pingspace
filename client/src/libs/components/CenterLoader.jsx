import React from "react";
import Loader from "./Loader";

const CenterLoader = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center h-full mt-52">
      <Loader color="#fff" />
    </div>
  );
};

export default CenterLoader;
