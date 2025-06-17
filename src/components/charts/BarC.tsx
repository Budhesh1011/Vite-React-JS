import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartDataList2 } from "../../data/ChartDataList";

const BarC = () => {
  return (
    <div className="bar-chart">
      <div className="bar-chart-heading text-center text-2xl">
        <h2>BarChart</h2>
      </div>
      <div className="bar-chart-inner">
        <ResponsiveContainer width="100%" aspect={3} className="mt-5">
          <BarChart data={ChartDataList2}>
            <CartesianGrid />
            <Tooltip contentStyle={{ backgroundColor: "yellow" }} />
            <Bar dataKey="quantity" fill="green" />
            <Bar dataKey="sell_quantity" fill="blue" />
            <Bar dataKey="remaining_quantity" fill="red" />
            <Bar dataKey="city" fill="gray" />
            <Legend />
            <XAxis
              interval={"preserveStartEnd"}
              stroke="black"
              dataKey="year"
              label="X-axis"
            />
            <YAxis
              stroke="black"
              label="Y-axis"
              dataKey="sell_quantity"
              interval={"preserveStartEnd"}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarC;
