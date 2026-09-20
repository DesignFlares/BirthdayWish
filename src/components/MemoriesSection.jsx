import React from "react";
import PhotoCard from "./PhotoCard";
export default function MemoriesSection({ data, onOpenPhoto }) {
  return (
    <section id="memories" className="memories section-paper">
      <div className="section-heading">
        <span className="mini-label">THE CAMERA ROLL ARCHIVES</span>

        <h2>
          A FEW CHAPTERS
          <br />
          <em>FROM THEN TO NOW...</em>
        </h2>

        <p>
          Because apparently growing up left behind quite a lot of evidence.
          Some wholesome, some chaotic, all worth keeping.
        </p>
      </div>
      <div className="memory-grid">
        {data.memories.map((photo, i) => (
          <PhotoCard key={i} photo={photo} index={i} onOpen={onOpenPhoto} />
        ))}
      </div>
      <div className="memory-doodles" aria-hidden="true">
        🐿️ &nbsp; ✨ &nbsp; 🌿 &nbsp; ✨ &nbsp; 🦋
      </div>
    </section>
  );
}
