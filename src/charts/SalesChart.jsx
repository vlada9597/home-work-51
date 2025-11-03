import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function SalesChart() {
  const data = {
    labels: ["Ноутбук", "Смартфон", "Навушники"],
    datasets: [
      {
        label: "Продажі ($)",
        data: [1000, 700, 150],
        backgroundColor: ["#007bff", "#4CAF50", "#FFC107"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true },
    },
  };

  return (
    <div style={{ width: "500px", marginTop: 30 }}>
      <h2>Статистика продажів</h2>
      <Bar data={data} options={options} />
    </div>
  );
}
