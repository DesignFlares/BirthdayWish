import React from "react";
import { useState } from "react";
import { Heart, MailOpen } from "lucide-react";
export default function BirthdayLetter({ data }) {
  const [open, setOpen] = useState(false);
  const message = data.letter
    .replaceAll("[NAME]", data.name)
    .replaceAll("[YOUR NAME]", data.senderName);

  return (
    <section id="letter" className="letter section">
      <div className="letter-orbit">✦　🌿　✦　🦋　✦</div>
      {!open ? (
        <div className="envelope-wrap">
          <p className="letter-pre">Okay, enough with the fancy website stuff...</p>
          <h2>I actually wanted<br/><em>to say something.</em></h2>
          <button className="envelope" onClick={() => setOpen(true)} aria-label="Open birthday letter">
            <span className="envelope-flap">♥</span>
            <span className="envelope-body">💌</span>
          </button>
          <button className="open-letter" onClick={() => setOpen(true)}>OPEN IT 💌</button>
        </div>
      ) : (
        <article className="letter-paper">
          <div className="letter-seal">♥</div>
          <span className="mini-label">A SLIGHTLY SINCERE MOMENT</span>
          <h2>For you, {data.name}. ❤️</h2>
          <div className="letter-text">
            {message.split("\n").map((line, i) => line ? <p key={i}>{line}</p> : <div key={i} className="letter-gap" />)}
          </div>
          <button className="close-letter" onClick={() => setOpen(false)}>fold it back up ✦</button>
        </article>
      )}
    </section>
  );
}