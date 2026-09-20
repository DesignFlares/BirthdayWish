import React from "react";
import { Camera, Sparkles } from "lucide-react";
export default function InteractiveForest({ data, onOpenPhoto }) {
  const selected = data.meme.slice(0, 3);
  return (
    <section className="interactive section">
      <div className="section-heading light">
        <span className="mini-label">WAIT... THERE'S MORE</span>

        <h2>
          SOME MEME MATERIAL 
        </h2>

        <p>
          A few little snapshots hanging between the trees 
        </p>
      </div>
      <div className="forest-scene">
        <div className="scene-moon">☾</div>
        <div className="scene-stars">✦　⋆　✧　✦</div>
        <div className="scene-tree scene-tree-left">🌲</div>
        <div className="scene-tree scene-tree-right">🌲</div>
        <div className="scene-animal">🦌</div>
        <div className="string string-one">
          <span />
          <span />
        </div>
        <div className="hanging-photos">
          {selected.map((photo, i) => (
            <button
              key={i}
              className={`hanging-photo hanging-${i}`}
              onClick={() => onOpenPhoto(photo)}
              aria-label={`Open ${photo.caption}`}
            >
              <span className="peg">●</span>
              <img
                src={photo.image}
                alt={photo.caption}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/500x500/EDE3CC/76553C?text=Your+Photo`;
                }}
              />
              <small>{photo.caption}</small>
            </button>
          ))}
        </div>
        <div className="scene-fireflies">✦　·　✧　·　✦　·　⋆　·　✧</div>
       
      </div>
    </section>
  );
}
