import React from "react";
import PhotoCard from "./PhotoCard";
export default function PeopleSection({ data, onOpenPhoto }) {
  return (
    <section id="people" className="people section">
      <div className="section-heading">
        <span className="mini-label">THE PEOPLE & THE GOOD TIMES ❤️</span>

        <h2>
          THE PEOPLE WHO HAVE
          <br />
          <em>BEEN THERE</em>
        </h2>

        <p>
          From the tiny-you years to recent adventures, these are some of the
          people and moments that make the story a lot more fun.
        </p>
      </div>
      <div className="people-collage">
        {data.people.map((photo, i) => (
          <PhotoCard key={i} photo={photo} index={i} onOpen={onOpenPhoto} />
        ))}
      </div>
       <p className="hand-note people-note">
        apparently, you've been collecting good people for years. ❤️
      </p>
    </section>
  );
}
