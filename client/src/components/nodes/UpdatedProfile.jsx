import { createRef } from "react";
import { IoAddCircle } from "solid-icons/io";
import { createSignal } from "solid-js";

const UpdatedProfile = () => {
  const imgRef = createRef();
  const [photo, setPhoto] = createSignal("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    transformFile(file);
  };

  const transformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
    } else {
      setPhoto("");
    }
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="flex flex-col justify-center absolute p-2 left-[40%] top-[40%]  max-[700px]:top-[25%] max-[700px]:left-[3rem] items-center bg-neutral-900 shadow shadow-neutral-300 h-auto w-[270px] rounded-[9px]"
    >
      {photo() ? (
        <img
          onClick={() => imgRef.current.click()}
          src={photo()}
          className="w-full"
        />
      ) : (
        <div
          onClick={() => imgRef.current.click()}
          className="flex items-center gap-2 text-white p-3 hover:bg-slate-800 cursor-pointer rounded-[8px] w-full"
        >
          <IoAddCircle size={25} />
          <p className="text-white font-kanit">Select a photo</p>
        </div>
      )}
      <input
        type="file"
        className="hidden"
        ref={imgRef}
        onChange={handleImage}
      />
    </div>
  );
};

export default UpdatedProfile;
