import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { ChartDataList2 } from "../../data/ChartDataList";

const PieC = () => {
  return (
    <div className="pie-chart">
      <div className="pie-chart-heading text-center text-2xl">
        <h2>PieChart</h2>
      </div>
      <div className="pie-chart-inner">
        <ResponsiveContainer width="100%" aspect={3}>
          <PieChart>
            <Tooltip contentStyle={{ backgroundColor: "yellow" }} />
            <Legend />
            <Pie
              data={ChartDataList2}
              dataKey="sell_quantity"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="red"
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieC;
