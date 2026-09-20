import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["home", "Home"],
  ["people", "People"],
  ["memories", "Memories"],
  ["letter", "Letter"]
];

export default function Navbar({ name }) {
  const [open, setOpen] = useState(false);
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className={`navbar ${open ? "open" : ""}`}>
      <button className="brand" onClick={() => go("home")} aria-label="Go to home">
        <span className="brand-leaf">🌿</span> {name}'S DAY
      </button>
      <button className="menu-button" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
      <div className="nav-links">
        {links.map(([id, label]) => <button key={id} onClick={() => go(id)}>{label}</button>)}
      </div>
    </nav>
  );
}