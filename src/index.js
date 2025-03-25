import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Import from react-dom/client
import "./index.css"; // Ensure this file is correctly linked

import App from "./App";
import { CartProvider } from "./Components/CartContext";

// ✅ Create a root and render App inside it
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider >
    <App />
  </CartProvider>
);
