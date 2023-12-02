import { createEffect, createSignal, onCleanup } from "solid-js";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { LOCAL_URL } from "../constant/url";
import { useToast } from "../libs/components/ToastContainer";
import { useNavigate } from "@solidjs/router";

const initialState = {
  token: localStorage.getItem("pingspace-token"),
  id: "",
  name: "",
  email: "",
  username: "",
  profile: "",
  loginStatus: null,
  loginError: null,
  regStatus: null,
  regError: null,
  G_LOG_STATUS: null,
  G_LOG_ERROR: null,
  userLoaded: false,
};

const useAuth = () => {
  const [state, setState] = createSignal(initialState);
  const { showToast } = useToast();
  const [Loading, setLoading] = createSignal(false);
  const navigate = useNavigate();

  const loadUser = () => {
    const token = state().token;
    if (token) {
      const user = jwtDecode(token);
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

      // window.location = "/people";
    } else {
      navigate("/login");
    }
  };

  const login = async (authData) => {
    try {
      setLoading(true);
      const response = await axios.post(`${LOCAL_URL}/users/login`, {
        email: authData().email,
        password: authData().password,
      });

      localStorage.setItem("pingspace-token", response?.data);
      const token = response.data;
      if (token) {
        const user = jwtDecode(token);
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
        if (state().id) {
          window.location = "/people";
        }
      }
      return response?.data;
    } catch (error) {
      console.error(error);
      showToast("error", error.response?.data);
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
      const response = await axios.post(`${LOCAL_URL}/users/new`, {
        name: authData().name,
        username: authData().username,
        email: authData().email,
        password: authData().password,
      });

      localStorage.setItem("pingspace-token", response?.data);
      const token = response.data;
      if (token) {
        const user = jwtDecode(token);
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
          regStatus: "success",
        }));
        if (state().id) {
          window.location = "/people";
        }
      }
      return response?.data;
    } catch (error) {
      console.error({ error: error.message });
      showToast("error", error.response?.data);
      setState((prev) => ({
        ...prev,
        regError: error.response?.data,
      }));
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("pingspace-token");
    setState((prev) => ({
      ...prev,
      token: "",
      id: "",
      name: "",
      email: "",
      username: "",
      profile: "",
      userLoaded: false,
    }));

    showToast("info", "Logged out");
    window.location = "/login";
  };

  // Cleanup effect (optional)
  // onCleanup(() => {s
  // });

  return {
    state,
    Loading,
    actions: {
      loadUser,
      login,
      register,
      logout,
    },
  };
};

export default useAuth;
