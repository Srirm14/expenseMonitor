import React from "react";
import styles from "./chart-bar.module.css";

export default function ChartBar(props) {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className={styles.ChartBar}>
      <div className={styles.chartBarInner}>
        <div className={styles.chartBarFill} style={{ height: barFillHeight }}></div>
        <div className={styles.chartBarLabel}>{props.label}</div>
      </div>
    </div>
  );
}
