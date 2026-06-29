import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";
import { revenueData } from "../../data/dashboardData.js"
import { ChartBox } from './styles.js';

function Chart() {


  return (
    <ChartBox>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={revenueData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="mes" />
        <YAxis />
        <Tooltip />
        <Line type="monotone"
          dataKey="vendas"
          stroke="#3b82f6" />
      </LineChart>
    </ResponsiveContainer>
    </ChartBox>
  )
}

export default Chart