import React from "react";
import { createEffect, createSignal } from "solid-js";
import { Button, Input, PasswordInput } from "../../libs";
import { FaSolidMessage } from "solid-icons/fa";
import { PingLogo } from "../../components";
import { useLocation, useNavigate } from "@solidjs/router";
import useAuth from "../../state/auth";
import { pageName } from "../../libs/functions/functions";

const Login = () => {
  createEffect(() => {
    document.title = `${pageName()} | Pingspace`;
  });

  const { state, actions, Loading } = useAuth();
  const isLoading = Loading();

  const [authData, setAuthData] = createSignal({
    email: "",
    password: "",
  });

  createEffect(() => {
    console.log("data:", authData());
  }, [authData()]);

  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      actions.login(authData);
    }
  };

  // Add event listener on component mount
  createEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    console.log("Loading:", Loading());

    // Cleanup to remove the event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  function login() {
    actions.login(authData);
  }

  return (
    <div className="flex flex-col w-full h-auto relative p-20 items-center justify-center">
      <div className="flex flex-col h-full relative w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-5 w-[300px]">
          <h1 className="font-kanit text-[25px] text-[#fff]">Welcome</h1>
          <Input
            type="text"
            value={authData().email}
            onChange={(e) =>
              setAuthData({ ...authData(), email: e.target.value })
            }
            labelText="Email"
          />
          <PasswordInput
            value={authData().password}
            onChange={(e) =>
              setAuthData({ ...authData(), password: e.target.value })
            }
            labelText="Password"
          />
          <p
            onClick={() => navigate("/register")}
            className="text-neutral-500 text-justify font-kanit underline hover:text-blue-600 text-[15px] cursor-pointer"
          >
            Don't have an account?
          </p>
          <Button
            text="Login"
            onClick={login}
            secondary
            fitContent
            disabled={isLoading}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
