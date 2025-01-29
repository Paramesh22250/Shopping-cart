import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ShoppingContextProvider } from "./context/index.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShoppingContextProvider>
      <App />
    </ShoppingContextProvider>
  </BrowserRouter>
);
