import React from "react";
import { AiOutlineLoading3Quarters } from "solid-icons/ai";
import "../styles/index.css";

const Loader = ({ color, className }) => {
  return (
    <AiOutlineLoading3Quarters
      class={`loader hide-scroll ${className}`}
      color={color}
      size={25}
    />
  );
};

export default Loader;
