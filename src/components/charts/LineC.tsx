import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartDataList2 } from "../../data/ChartDataList";

const LineC = () => {
  return (
    <div className="line-chart">
      <div className="line-chart-heading text-center text-2xl">
        <h2>LineChart</h2>
      </div>
      <div className="line-chart-inner">
        <ResponsiveContainer width="100%" aspect={3} className="mt-5">
          <LineChart data={ChartDataList2}>
            <XAxis
              stroke="black"
              dataKey="year"
              interval={"preserveStartEnd"}
            />
            <YAxis
              stroke="black"
              dataKey="sell_quantity"
              interval={"preserveStartEnd"}
            />

            <Line type="monotone" dataKey="quantity" stroke="green" />
            <Line type="monotone" dataKey="sell_quantity" stroke="red" />
            <Line type="monotone" dataKey="remaining_quantity" stroke="gray" />
            <Line type="monotone" dataKey="year" stroke="yellow" />
            <Line type="monotone" dataKey="city" stroke="blue" />
            <CartesianGrid />
            <Tooltip contentStyle={{ backgroundColor: "pink" }} />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineC;
