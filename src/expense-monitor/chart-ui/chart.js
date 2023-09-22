import React from "react";
import "./chart.css";
import ChartBar from "../chartBar-ui/chart-bar";

export default function Chart(props) {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint,index) => (
        <ChartBar
        class="chart-bar"
          key={index}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
}
