import React from "react";
export default function Fireflies({ count = 20 }) {
  return <div className="firefly-layer" aria-hidden="true">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="firefly" style={{
        "--x": `${(i * 37) % 100}%`,
        "--y": `${(i * 53 + 7) % 95}%`,
        "--delay": `${(i % 8) * 0.7}s`,
        "--duration": `${5 + (i % 5)}s`
      }} />
    ))}
  </div>;
}