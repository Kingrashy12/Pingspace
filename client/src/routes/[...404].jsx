import { FaSolidArrowLeft } from "solid-icons/fa";
import { A, useNavigate } from "solid-start";
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Not Found
      </h1>
      <p class="mt-8">Page will be available soon</p>
      {/* <FaSolidArrowLeft
        size={25}
        class="text-white cursor-pointer mt-8"
        onclick={() => navigate(-1)}
      /> */}
    </main>
  );
}
