import React from "react";
import { createEffect, createSignal } from "solid-js";
import { Button, Input, PasswordInput } from "../../libs";
import { FaSolidMessage } from "solid-icons/fa";
import { PingLogo } from "../../components";
import { Link, useLocation, useNavigate } from "@solidjs/router";
import useAuth from "../../state/auth";
import { pageName } from "../../libs/functions/functions";

const Register = () => {
  createEffect(() => {
    document.title = `${pageName()} | Pingspace`;
  });
  const { state, actions } = useAuth();
  const isLoading = state().regStatus === "loading";
  const navigate = useNavigate();

  const [authData, setAuthData] = createSignal({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  createEffect(() => {
    console.log("data:", authData());
  }, [authData()]);

  function saveUser() {
    actions.register(authData);
  }

  return (
    <div className="flex flex-col w-full h-auto relative p-20 items-center justify-center">
      <div className="flex flex-col h-full relative w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-5 w-[300px]">
          <h1 className="font-kanit text-[25px] text-[#fff]">Create account</h1>
          <Input
            type="text"
            value={authData().name}
            onChange={(e) =>
              setAuthData({ ...authData(), name: e.target.value })
            }
            labelText="Name"
          />
          <Input
            type="text"
            value={authData().username}
            onChange={(e) =>
              setAuthData({ ...authData(), username: e.target.value })
            }
            labelText="Username"
          />
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
          <Link href="/login">
            <p className="text-neutral-500 text-justify font-kanit underline hover:text-blue-600 text-[15px] cursor-pointer">
              have an account?
            </p>
          </Link>
          <Button
            isLoading={isLoading}
            disabled={isLoading}
            text="Sign up"
            onClick={saveUser}
            secondary
            fitContent
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
