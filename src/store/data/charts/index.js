import LineChart from "./Candlestick";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";
// import ColumnChart from "./ColumnChart";
// import BoxPlot from "./BoxPlot";
// import Candlestick from "./Candlestick";
// import RangeBarChart from "./RangeBarChart";
// import HeatMapChart from "./HeatMapChart";
// import TreemapChart from "./TreemapChart";
// import MultiAxisChart from "./MultiAxisChart";
import {data} from "./PieDonut";
// import Radar from "./Radar";
// import RadialBarCircularGauge from "./RadialBarCircularGauge";
// import Synchronizedcharts from "./Synchronizedcharts";

const charts = {
  LineChart: LineChart,
  AreaChart: AreaChart,
  BarChart: BarChart,
  PieDonut: data,
  // ColumnChart: ColumnChart,
  // BoxPlot: BoxPlot,
  // Candlestick: Candlestick,
  // RangeBarChart: RangeBarChart,
  // HeatMapChart: HeatMapChart,
  // TreemapChart: TreemapChart,
  // MultiAxisChart: MultiAxisChart,
  // Radar: Radar,
  // RadialBarCircularGauge: RadialBarCircularGauge,
  // Synchronizedcharts: Synchronizedcharts,
};
export default charts;
