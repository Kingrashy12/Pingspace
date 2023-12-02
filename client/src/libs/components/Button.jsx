import React from "react";
import Loader from "./Loader";

const Button = ({
  text,
  secondary,
  primary,
  onClick,
  isLoading,
  disabled,
  className,
  width,
  fitContent,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ width: width }}
      className={`${className} disabled:cursor-not-allowed disabled:opacity-75 hover:opacity-75 cursor-pointer flex rounded-[7px] font-kanit items-center p-2 justify-center ${
        secondary ? "bg-blue-600 text-white" : ""
      } ${primary ? "bg-black text-white" : ""} ${fitContent && "w-full"}`}
    >
      {isLoading ? <Loader /> : text}
    </button>
  );
};

export default Button;
