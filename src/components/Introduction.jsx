import React from "react";
import { Sparkles } from "lucide-react";
export default function Introduction({ data }) {
  return (
    <section id="intro" className="intro section-paper">
      <div className="paper-tape tape-left" /><div className="paper-tape tape-right" />
      <div className="section-doodle doodle-left">🌿</div>
      <div className="intro-inner">
        <span className="mini-label">A QUICK NOTE...</span>
        <h2>Okay... today is actually about <em>YOU.</em></h2>
        <p className="intro-main">{data.introduction}</p>
        <p>So here's a tiny trip through the camera roll — family, friends, childhood chaos, recent adventures and a few moments that simply had to make the cut.</p>
        <div className="tiny-trail"><span>✦</span><span>🍃</span><span>✦</span><span>🦋</span><span>✦</span></div>
      </div>
    </section>
  );
}