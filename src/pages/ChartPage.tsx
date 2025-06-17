import BarC from "../components/charts/BarC";
import LineC from "../components/charts/LineC";
import PieC from "../components/charts/PieC";
import Loader from "../components/common/Loader";

const ChartPage = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <Loader>
        <LineC />
        <BarC />
        <PieC />
      </Loader>
    </div>
  );
};

export default ChartPage;
