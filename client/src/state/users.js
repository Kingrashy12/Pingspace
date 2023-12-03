import { createEffect, createSignal } from "solid-js";
import { useToast } from "../libs/components/ToastContainer";
import axios from "axios";
import { BASE_URL } from "../constant/url";

const initialState = {
  users: [],
  error: "",
};

const useUsers = () => {
  const [isLoading, setIsLoading] = createSignal(true);
  const { showToast } = useToast();
  const [state, setState] = createSignal(initialState);

  const getusers = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${BASE_URL}/users`);
      const data = response?.data;
      if (data) {
        setState((prev) => ({
          ...prev,
          users: data,
        }));
      }
      return response?.data;
    } catch (error) {
      console.error({ error: error.message });
      showToast("error", error.response?.data);
      setState((prev) => ({
        ...prev,
        error: error.response?.data,
      }));
    } finally {
      setIsLoading(false);
    }
  };

  // Use createEffect for initialization
  createEffect(() => {
    getusers();
  }, []);

  return {
    state,
    isLoading,
    actions: {
      getusers,
    },
  };
};

export default useUsers;
