import React, { useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer,
} from "recharts";

const initialData = [
  { name: 1, cost: 4.11, impression: 100 },
  { name: 2, cost: 2.39, impression: 120 },
  { name: 3, cost: 1.37, impression: 150 },
  { name: 4, cost: 1.16, impression: 180 },
  { name: 5, cost: 2.29, impression: 200 },
  { name: 6, cost: 3, impression: 499 },
  { name: 7, cost: 0.53, impression: 50 },
  { name: 8, cost: 2.52, impression: 100 },
];

const getAxisYDomain = (from, to, ref, offset) => {
  const refData = initialData.slice(from - 1, to);
  let [bottom, top] = [refData[0][ref], refData[0][ref]];

  refData.forEach((d) => {
    if (d[ref] > top) top = d[ref];
    if (d[ref] < bottom) bottom = d[ref];
  });

  return [(bottom | 0) - offset, (top | 0) + offset];
};

const initialState = {
  data: initialData,
  left: "dataMin",
  right: "dataMax",
  refAreaLeft: "",
  refAreaRight: "",
  top: "dataMax+1",
  bottom: "dataMin-1",
  top2: "dataMax+20",
  bottom2: "dataMin-20",
  animation: true,
};

const HLLineChart = () => {
  const [state, setState] = useState(initialState);

  const zoom = () => {
    let { refAreaLeft, refAreaRight } = state;
    const { data } = state;

    if (refAreaLeft === refAreaRight || refAreaRight === "") {
      setState(() => ({
        refAreaLeft: "",
        refAreaRight: "",
      }));
      return;
    }

    // xAxis domain
    if (refAreaLeft > refAreaRight)
      [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

    // yAxis domain
    const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, "cost", 1);
    const [bottom2, top2] = getAxisYDomain(
      refAreaLeft,
      refAreaRight,
      "impression",
      50
    );

    setState(() => ({
      refAreaLeft: "",
      refAreaRight: "",
      data: data.slice(),
      left: refAreaLeft,
      right: refAreaRight,
      bottom,
      top,
      bottom2,
      top2,
    }));
  };

  const zoomOut = () => {
    const { data } = state;
    setState(() => ({
      data: data.slice(),
      refAreaLeft: "",
      refAreaRight: "",
      left: "dataMin",
      right: "dataMax",
      top: "dataMax+1",
      bottom: "dataMin",
      top2: "dataMax+50",
      bottom2: "dataMin+50",
    }));
  };

  const {
    data,
    left,
    right,
    refAreaLeft,
    refAreaRight,
    top,
    bottom,
    top2,
    bottom2,
  } = state;

  console.log(state);

  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      onMouseDown={(e) => setState({ refAreaLeft: e.activeLabel })}
      onMouseMove={(e) =>
        state.refAreaLeft && setState({ refAreaRight: e.activeLabel })
      }
      // eslint-disable-next-line react/jsx-no-bind
      onMouseUp={zoom}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        allowDataOverflow
        dataKey="name"
        domain={[left, right]}
        type="number"
      />
      <YAxis
        allowDataOverflow
        domain={[bottom, top]}
        type="number"
        yAxisId="1"
      />
      <YAxis
        orientation="right"
        allowDataOverflow
        domain={[bottom2, top2]}
        type="number"
        yAxisId="2"
      />
      <Tooltip />
      <Line
        yAxisId="1"
        type="natural"
        dataKey="cost"
        stroke="#8884d8"
        animationDuration={300}
      />
      <Line
        yAxisId="2"
        type="natural"
        dataKey="impression"
        stroke="#82ca9d"
        animationDuration={300}
      />

      {refAreaLeft && refAreaRight ? (
        <ReferenceArea
          yAxisId="1"
          x1={refAreaLeft}
          x2={refAreaRight}
          strokeOpacity={0.3}
        />
      ) : null}
    </LineChart>
  );
};

export default HLLineChart;
