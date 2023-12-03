import { createEffect, createSignal } from "solid-js";
import { useNavigate } from "solid-start";
import { Button, Input, PasswordInput } from "~/libs";
import { pageName } from "~/libs/functions/functions";
import { useAuth } from "~/state/auth";

const Login = () => {
  createEffect(() => {
    document.title = `${pageName()} | Pingspace`;
  });

  const { state, actions, Loading } = useAuth();

  const [authData, setAuthData] = createSignal({
    email: "",
    password: "",
  });

  createEffect(() => {
    actions.loadUser();
    if (state().token.length) {
      navigate("/");
    }
  });

  const navigate = useNavigate();
  function login() {
    actions.login(authData);
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      login();
    }
  };

  createEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

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
            disabled={Loading()}
            isLoading={Loading()}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
