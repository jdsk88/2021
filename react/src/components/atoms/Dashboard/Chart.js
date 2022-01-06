// import "./styles.css";
import * as React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const Chart = ({ chart, i }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={300} height={100} data={chart.data}>
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default Chart;
