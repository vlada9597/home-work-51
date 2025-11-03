import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ToastNotifications from "./components/ToastNotifications";
import IdleTimerComponent from "./components/IdleTimerComponent";
import SalesChart from "./charts/SalesChart";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <Header />
      <ToastNotifications />
      <IdleTimerComponent />
      <ProductList />
      <SalesChart />
    </div>
  );
}
