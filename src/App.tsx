import { useState } from "react";
import "./App.css";

const range = (size: number): number[] => Array.from(Array(size).keys());

function App() {
  const [numerator, setNumerator] = useState(2);
  const [denominator, setDenominator] = useState(10);
  const angle = (360 * numerator) / denominator;

  const cos = (angle: number) => Math.cos((angle / 180) * Math.PI);
  const sin = (angle: number) => Math.sin((angle / 180) * Math.PI);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
        }}
      >
        <div>Numerator :</div>
        <input
          type="range"
          value={numerator}
          min={0}
          max={24}
          onChange={(e) => {
            const value = +e.target.value;
            if (value <= denominator) {
              setNumerator(value);
            }
          }}
        ></input>
        <div>Denominator :</div>
        <input
          type="range"
          value={denominator}
          min={1}
          max={24}
          onChange={(e) => {
            const value = +e.target.value;
            if (value >= numerator) {
              setDenominator(value);
            }
          }}
        ></input>
      </div>
      <div style={{ border: "1px solid #555", margin: 10 }}>
        <svg
          viewBox="0 0 400 200"
          width="400"
          height="200"
          stroke="white"
          fill="none"
          stroke-width="2"
        >
          <text x="200" y="30" stroke="none" fill="white" text-anchor="middle">
            {numerator} / {denominator}
          </text>
          <rect width="300" height="50" x="50" y="100" stroke="#333" />
          {range(denominator).map((n) => (
            <line
              x1={50 + (n * 300) / denominator}
              y1="100"
              x2={50 + (n * 300) / denominator}
              y2="150"
              stroke="#333"
            />
          ))}
          <line x1={50} y1="100" x2={50} y2="150" />
          {range(numerator).map((n) => (
            <rect
              width={300 / denominator}
              height="50"
              x={50 + n * (300 / denominator)}
              y="100"
            />
          ))}
        </svg>
      </div>
    </>
  );
}

export default App;
