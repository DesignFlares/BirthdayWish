import React from "react";
const leaves = ["🍃", "🌿", "🍂", "✦"];
export default function FallingLeaves({ count = 10 }) {
  return <div className="leaf-layer" aria-hidden="true">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="falling-leaf" style={{
        left: `${(i * 17) % 100}%`,
        animationDelay: `${i * 1.3}s`,
        animationDuration: `${9 + (i % 5)}s`
      }}>{leaves[i % leaves.length]}</span>
    ))}
  </div>;
}