import {PieChart,Pie,Tooltip,ResponsiveContainer,Cell,Legend} from "recharts";
import { dataPie,Colors } from "../../data/dashboardData";
import { ChartBox } from './styles.js';

function Analyticchart() {


    return(
      <ChartBox>
<ResponsiveContainer width="100%" height={300}>
  <PieChart>
    <Pie
      data={dataPie}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={100}
      fill="#263144"
      label
    >
      {dataPie.map((entry, index) => (
        <Cell
          key={`cell-${index}`}
          fill={Colors[index % Colors.length]}
        />
      ))}
    </Pie>

    <Tooltip />
  </PieChart>
</ResponsiveContainer>
</ChartBox>
    )
}

export default Analyticchart