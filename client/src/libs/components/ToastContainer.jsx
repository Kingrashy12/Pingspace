// ToastContext.jsx
import { createContext, createSignal, onCleanup, useContext } from "solid-js";
import ToastAlert from "./ToastAlert";

const ToastContext = createContext();

const ToastProvider = (props) => {
  const [toasts, setToasts] = createSignal([]);

  const showToast = (type, message) => {
    setToasts((prev) => [...prev, { id: Date.now(), type, message }]);
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  // Cleanup old toasts
  onCleanup(() => setToasts([]));

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {props.children}
      <div>
        {toasts().map((toast) => (
          <ToastAlert
            key={toast.id}
            type={toast.type}
            message={toast.message}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export { ToastProvider, useToast };
