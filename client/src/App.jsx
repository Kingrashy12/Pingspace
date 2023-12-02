import { Routes, Route, useNavigate, useLocation } from "@solidjs/router";
import { Login, People, Register } from "./pages";
import "./App.css";
import { createEffect } from "solid-js";
import useAuth from "./state/auth";
import { useToast } from "./libs/components/ToastContainer";
import { BottomNav, SideNav } from "./components";

function App() {
  const { actions } = useAuth();
  const path = useLocation();

  createEffect(() => {
    actions.loadUser();
  });

  return (
    <div className="w-full h-full relative">
      <Routes>
        <Route path="/people" component={<People />} />
        <Route path="/login" component={<Login />} />
        <Route path="/register" component={<Register />} />
      </Routes>
      {/* {path.pathname === "/login" ? "" : <BottomNav />} */}
      <BottomNav />
    </div>
  );
}

export default App;
