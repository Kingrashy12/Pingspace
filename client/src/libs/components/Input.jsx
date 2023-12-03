import InputLabel from "./InputLabel";

const Input = ({
  type,
  labelText,
  className,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <InputLabel text={labelText} />
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onInput={onChange}
        className={`${className} p-2 bg-slate-800 w-full font-poppins text-white rounded-[9px] outline-none border-none`}
      />
    </div>
  );
};

export default Input;
