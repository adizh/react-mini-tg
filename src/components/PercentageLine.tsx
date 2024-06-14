import React from "react";

interface PercentageLineProps {
  percentage: number;
  height?: number;
  backgroundColor?: string;
  fillColor?: string;
}

const PercentageLine: React.FC<PercentageLineProps> = ({
  percentage,
  backgroundColor = "#262938",
  fillColor = "#4361EE",
}) => {
  return (
    <div className="percentage-line-container" style={{ backgroundColor }}>
      <div
        className="percentage-line-fill"
        style={{
          width: `${percentage}%`,
          height: "100%",
          backgroundColor: fillColor,
        }}
      ></div>
      <div className="percentage-line-text">Mining {percentage} MDC</div>
    </div>
  );
};

export default PercentageLine;
