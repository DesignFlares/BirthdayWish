import React from "react";
export default function PhotoCard({ photo, index, onOpen }) {
  return (
    <button
      className="photo-card"
      style={{ "--rotation": photo.rotate || `${index % 2 ? 2 : -2}deg` }}
      onClick={() => onOpen?.(photo)}
      aria-label={`Open photo: ${photo.caption}`}
    >
      <div className="photo-frame">
        <img src={photo.image} alt={photo.caption} loading="lazy"
          onError={(e) => { e.currentTarget.src = `https://placehold.co/700x700/EDE3CC/76553C?text=Add+Your+Photo`; }} />
      </div>
      <span className="photo-caption">{photo.caption}</span>
      {photo.note && <span className="photo-note">{photo.note}</span>}
      <span className="tape" />
    </button>
  );
}