import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { revenueDataBar } from "../../data/dashboardData";

function BarCharts() {
  return (
    <ResponsiveContainer width={615} height={200}>
      <BarChart data={revenueDataBar}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="mes" />

        <YAxis />

        <Tooltip />

        <Legend />

        <Bar
          dataKey="Ano2025"
          fill="#1E3A5F"
          radius={[4, 4, 0, 0]}
        />

        <Bar
          dataKey="Ano2026"
          fill="#F59E0B"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarCharts