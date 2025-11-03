import React from "react";
import { toast } from "react-toastify";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const products = [
  { id: 1, name: "Ноутбук", price: 1000 },
  { id: 2, name: "Смартфон", price: 700 },
  { id: 3, name: "Навушники", price: 150 },
];

export default function ProductList() {
  const handleBuy = (name) => {
    toast.success(`✅ Ви успішно придбали ${name}`);
  };

  const handleError = () => {
    toast.error("❌ Сталася помилка при покупці!");
  };

  return (
    <div style={{ marginTop: 30 }}>
      <h2>Список товарів</h2>
      {products.map((p) => (
        <div
          key={p.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 10,
          }}
        >
          <strong>{p.name}</strong> — ${p.price}
          <button
            onClick={() => handleBuy(p.name)}
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <FaCheckCircle /> Купити
          </button>
          <button
            onClick={handleError}
            style={{
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <FaTimesCircle /> Помилка
          </button>
        </div>
      ))}
    </div>
  );
}
