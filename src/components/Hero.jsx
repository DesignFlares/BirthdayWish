import React from "react";
import { ArrowDown, CakeSlice, Gift, Sparkles } from "lucide-react";

export default function Hero({ data }) {
  const scrollNext = () => document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="home" className="hero">
      <div className="hero-sky">
        <div className="cloud cloud-one" /><div className="cloud cloud-two" />
        <div className="sun-glow" />
        <div className="bird bird-one">⌁</div><div className="bird bird-two">⌁</div>
        <div className="butterfly">🦋</div>
      </div>
      <div className="hero-trees">
        <div className="tree tree-left">🌲</div><div className="tree tree-left-small">🌲</div>
        <div className="tree tree-right">🌲</div><div className="tree tree-right-small">🌲</div>
      </div>
      <div className="hero-ground">
        <span className="flower flower-a">🌼</span><span className="flower flower-b">🌸</span>
        <span className="deer">🦌</span><span className="gift">🎁</span><span className="cake">🎂</span>
      </div>

      <div className="hero-content">
         <p className="hero-kicker">HEY {data.name}...</p>
        <h1>IT'S YOUR <em>DAY!</em> <span style={{ fontSize: "5rem" }}>🎂</span></h1>
        <p className="hero-subtitle">Welcome to your very own little corner of the internet.</p>
        <button className="celebrate-button" onClick={scrollNext}>LET'S CELEBRATE <Sparkles size={18}/></button>
        <button className="scroll-hint" onClick={scrollNext} aria-label="Scroll to continue"><ArrowDown /></button>
      </div>

    </section>
  );
}
