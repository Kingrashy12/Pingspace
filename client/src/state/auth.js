import { createSignal, createEffect } from "solid-js";
import { useToast } from "../libs/components/ToastContainer";
import { BASE_URL } from "../constant/url";
import axios from "axios";
import { decodeToken } from "../libs/functions/functions";
import { useNavigate } from "solid-start";

const initialState = {
  token: "",
  name: "",
  email: "",
  username: "",
  id: "",
  loginStatus: null,
  loginError: null,
  userLoaded: false,
  created: "",
  profile: "",
};

const useAuth = () => {
  const [state, setState] = createSignal(initialState);
  const { showToast } = useToast();
  const [Loading, setLoading] = createSignal(false);
  const navigate = useNavigate();

  createEffect(() => {
    const intervalId = setInterval(() => {
      setState((prev) => ({
        ...prev,
        token: localStorage.getItem("pingspace-token"),
      }));
    }, 100);

    return () => clearInterval(intervalId);
  });

  const loadUser = () => {
    const token = state().token;
    if (token) {
      const user = decodeToken(token);
      setState((prev) => ({
        ...prev,
        token: token,
        id: user?.id,
        name: user?.name,
        email: user?.email,
        username: user?.username,
        created: user.created,
        profile: user?.profile,
        userLoaded: true,
      }));
    } else {
      navigate("/login");
    }
  };

  const logOut = () => {
    localStorage.removeItem("pingspace-token");

    setState((prev) => ({
      ...prev,
      token: "",
      id: "",
      name: "",
      email: "",
      username: "",
      profile: "",
      created: "",
      userLoaded: false,
    }));

    showToast("info", "Logged out");
    navigate("/login");
  };

  const login = async (authData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        email: authData().email,
        password: authData().password,
      });

      localStorage.setItem("pingspace-token", response?.data);
      const token = response.data;
      if (token) {
        const user = decodeToken(token);
        showToast("success", `Welcome ${user.username}`);
        setState((prev) => ({
          ...prev,
          token: token,
          id: user.id,
          name: user.name,
          email: user.email,
          username: user.username,
          profile: user.profile,
          userLoaded: true,
          loginStatus: "success",
        }));
        // if (state().id) {
        //   navigate("/");
        // }
      }
      return response?.data;
    } catch (error) {
      console.error(error);
      showToast("error", error.response?.data || error.message || error);
      setState((prev) => ({
        ...prev,
        loginError: error.response?.data,
      }));
    } finally {
      setLoading(false);
    }
  };

  const register = async (authData) => {
    try {
      setLoading(true);
      const response = await axios.post(`${BASE_URL}/auth/new`, {
        name: authData().name,
        email: authData().email,
        password: authData().password,
        username: authData().username,
      });

      localStorage.setItem("pingspace-token", response?.data);
      const token = response.data;
      if (token) {
        const user = decodeToken(token);
        showToast("success", `Welcome ${user.username}`);
        setState((prev) => ({
          ...prev,
          token: token,
          id: user.id,
          name: user.name,
          email: user.email,
          username: user.username,
          profile: user.profile,
          userLoaded: true,
        }));
        // if (state().token) {
        //   navigate("/");
        // }
      }
      return response?.data;
    } catch (error) {
      console.error(error);
      showToast("error", error.response?.data || error.message || error);
    } finally {
      setLoading(false);
    }
  };

  return {
    state,
    Loading,
    actions: {
      login,
      loadUser,
      logOut,
      register,
    },
  };
};

export { useAuth };
