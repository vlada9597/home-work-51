import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <FaShoppingCart size={30} color="#007bff" />
      <h1>Product Dashboard</h1>
    </header>
  );
}
