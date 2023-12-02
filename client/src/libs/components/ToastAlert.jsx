// ToastAlert.jsx
import { createEffect, onCleanup, createSignal } from "solid-js";
import { IoCloseOutline } from "solid-icons/io";
import { FaRegularCircleCheck } from "solid-icons/fa";
import { RiSystemErrorWarningLine } from "solid-icons/ri";
import { HiSolidInformationCircle } from "solid-icons/hi";
import "../styles/index.css";
import { generateUniqueId } from "../functions/genId";

const ToastAlert = ({ type, message, onClose }) => {
  const id = generateUniqueId();
  const [openToast, setOpenToast] = createSignal(true);

  createEffect(() => {
    if (openToast()) {
      setTimeout(() => {
        setOpenToast(false);
      }, 3000);
    }

    // Cleanup effect to log when the component is unmounted
    onCleanup(() => {
      console.log("ToastAlert component unmounted");
    });
  }, [openToast()]);

  const info = type === "info";
  const error = type === "error";
  const success = type === "success";

  return (
    <div
      id={id}
      className={`flex fixed z-[200] gap-3 top-2 left-[45%] max-[700px]:left-16 items-center border-2 p-2 rounded-[9px] w-[250px] ${
        openToast() ? "" : "hidden"
      } ${type === "success" && "border-green-600 bg-green-200"} ${
        type === "error" && "border-red-600 bg-red-200"
      } ${type === "info" && "border-blue-600 bg-blue-200"}`}
    >
      {error ? (
        <RiSystemErrorWarningLine size={25} class="text-red-600" />
      ) : info ? (
        <HiSolidInformationCircle size={25} class="text-blue-600" />
      ) : success ? (
        <FaRegularCircleCheck size={25} class="cursor-pointer text-green-600" />
      ) : (
        ""
      )}
      <p
        className={`font-kanit text-[16px] ${info && "text-blue-600"} ${
          error && "text-red-600"
        } ${success && "text-green-600"}`}
      >
        {message}
      </p>
    </div>
  );
};

export default ToastAlert;
