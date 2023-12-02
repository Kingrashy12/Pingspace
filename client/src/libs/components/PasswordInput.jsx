import InputLabel from "./InputLabel";
import PasswordStrength from "./PasswordStrength";
import { BsEye, BsEyeSlash } from "solid-icons/bs";
import { createEffect, createSignal } from "solid-js";

const PasswordInput = ({
  className,
  value,
  placeholder,
  onChange,
  labelText,
}) => {
  const [type, setType] = createSignal("password");

  function handleType() {
    setType((prevType) => (prevType === "password" ? "text" : "password"));
  }

  return (
    <div className="flex flex-col w-full gap-2">
      <InputLabel text={labelText} />
      <div className="flex justify-between items-center p-1 bg-slate-800 rounded-[9px]">
        <input
          type={type()}
          placeholder={placeholder}
          value={value}
          onInput={onChange}
          className={`${className} p-1 bg-transparent w-full font-poppins text-white outline-none border-none`}
        />
        {type() === "password" ? (
          <BsEye
            onClick={handleType}
            size={25}
            color="#fff"
            class="cursor-pointer"
          />
        ) : (
          <BsEyeSlash
            onClick={handleType}
            size={25}
            color="#fff"
            class="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
