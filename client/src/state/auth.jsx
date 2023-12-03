import {
  createSignal,
  useContext,
  createEffect,
  createContext,
} from "solid-js";
import { useToast } from "../libs/components/ToastContainer";
import { BASE_URL } from "../constant/url";
import axios from "axios";
import { decodeToken } from "../libs/functions/functions";
import { useNavigate } from "@solidjs/router";

// Create a context to manage authentication state
const AuthContext = createContext();

const initialState = {
  token: localStorage.getItem("pingspace-token"),
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

const AuthProvider = (props) => {
  const [state, setState] = createSignal(initialState);
  const { showToast } = useToast();
  const [Loading, setLoading] = createSignal(false);
  const navigate = useNavigate();

  const loadUser = () => {
    const token = state().token;
    if (token) {
      const user = decodeToken(token);
      setState(() => ({
        ...state(),
        token: token,
        id: user?.id,
        name: user?.name,
        email: user?.email,
        username: user?.username,
        created: user.created,
        profile: user?.profile,
        userLoaded: true,
      }));
    }
  };

  const logOut = () => {
    localStorage.removeItem("pingspace-token");

    setState(() => ({
      ...state(),
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
  };

  const login = async (authData) => {
    try {
      setLoading(true);
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
        navigate("/people"); // Use navigate to redirect
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

  const contextValue = {
    state,
    Loading,
    actions: {
      login,
      loadUser,
      logOut,
    },
  };

  // ... (similar modifications for register, logout, and other functions)

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
