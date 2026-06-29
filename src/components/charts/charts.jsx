import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, } from "recharts";
import { revenueData } from "../../data/dashboardData.js"

function Chart() {


  return (
    <ResponsiveContainer width={615} height={200}>
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
  )
}

export default Chart