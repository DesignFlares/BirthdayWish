import React, { useEffect, useState } from "react";
export default function FinalCelebration({ data, wishMade, onWish }) {
  const [confetti, setConfetti] = useState([]);
  useEffect(() => {
    if (wishMade) {
      setConfetti(Array.from({ length: 34 }, (_, i) => i));
    }
  }, [wishMade]);
  return (
    <section className="final section">
      {" "}
      <div className="night-moon">🌙</div>{" "}
      <div className="night-stars"> ✦　⋆　✧　✦　⋆　✧　✦ </div>{" "}
      <div className="final-trees left">🌲🌲</div>{" "}
      <div className="final-trees right">🌲🌲</div> {/* Confetti after wish */}{" "}
      {wishMade && (
        <div className="confetti" aria-hidden="true">
          {" "}
          {confetti.map((i) => (
            <i key={i} style={{ "--i": i }}>
              {" "}
              ✦{" "}
            </i>
          ))}{" "}
        </div>
      )}{" "}
      <div className="final-content">
        {" "}
        <span className="mini-label">AND FINALLY...</span>{" "}
        <h2>
          {" "}
          🎂 HAPPY BIRTHDAY, <br /> <em>{data.name}!</em> 🎂{" "}
        </h2>{" "}
        <p className="final-intro"> Here's to another year of... </p>{" "}
        <div className="wish-list">
          {" "}
          <span>More laughs.</span> <span>More adventures.</span>{" "}
          <span>More memories.</span> <span>More ridiculous moments.</span>{" "}
          <span>More things to create.</span>{" "}
          <strong>
            {" "}
            And obviously... <br /> MORE CAKE. 🎂{" "}
          </strong>{" "}
        </div>{" "}
        {/* Birthday Cake */}{" "}
        <div className="cake-stand">
          {" "}
          {/* Candles are lit initially, then blown out */}{" "}
          <div className={`cake-candles ${wishMade ? "blown-out" : "lit"}`}>
            {" "}
            <i /> <i /> <i />{" "}
          </div>{" "}
          <div className="cake-body">🎂</div>{" "}
        </div>{" "}
        {/* Wish Button */}{" "}
        <button className="wish-button" onClick={onWish} disabled={wishMade}>
          {" "}
          {wishMade ? "WISH MADE ✨" : "MAKE A WISH ✨"}{" "}
        </button>{" "}
        {/* Wish message */}{" "}
        <p className={`wish-made ${wishMade ? "show" : ""}`}> Wish made. ✨ </p>{" "}
        <p className="best-birthday"> Have the BEST birthday ever! ❤️ </p>{" "}
        <p className="made-by"> Made with ❤️ by {data.senderName} </p>{" "}
      </div>{" "}
    </section>
  );
}
