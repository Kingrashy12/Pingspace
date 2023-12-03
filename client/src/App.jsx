import { Routes, Route, useNavigate, useLocation } from "@solidjs/router";
import { Account, Login, People, Register } from "./pages";
import "./App.css";
import { createEffect } from "solid-js";
import { useToast } from "./libs/components/ToastContainer";
import { BottomNav, SideNav } from "./components";
import { useAuth } from "./state/auth";

function App() {
  const { actions, state } = useAuth();
  const path = useLocation();
  const navigate = useNavigate();

  createEffect(() => {
    actions.loadUser();
    if (state().token) {
      navigate("/people");
    } else {
      navigate("/login");
    }
  });

  return (
    <div className="w-full h-full relative">
      <Routes>
        <Route path="/people" component={<People />} />
        <Route path="/login" component={<Login />} />
        <Route path="/register" component={<Register />} />
        <Route path="/profile" component={<Account />} />
      </Routes>
      {path.pathname === "/login" ? "" : <BottomNav />}
    </div>
  );
}

export default App;
