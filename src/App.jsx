import React from "react";
import { useState } from "react";
import { ChevronDown, Menu, X, Sparkles, Heart, CakeSlice, Gift, Moon, Star } from "lucide-react";
import { birthdayData } from "./data/birthdayData";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import PeopleSection from "./components/PeopleSection";
import MemoriesSection from "./components/MemoriesSection";
import InteractiveForest from "./components/InteractiveForest";
import BirthdayLetter from "./components/BirthdayLetter";
import FinalCelebration from "./components/FinalCelebration";
import Fireflies from "./components/Fireflies";
import FallingLeaves from "./components/FallingLeaves";

export default function App() {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [wishMade, setWishMade] = useState(false);

  return (
    <div className="app">
      
      <Fireflies count={24} />
      <FallingLeaves count={12} />

      <main>
        <Hero data={birthdayData} />
        <Introduction data={birthdayData} />
        <PeopleSection data={birthdayData} onOpenPhoto={setModalPhoto} />
        <MemoriesSection data={birthdayData} onOpenPhoto={setModalPhoto} />
        <InteractiveForest data={birthdayData} onOpenPhoto={setModalPhoto} />
        <BirthdayLetter data={birthdayData} />
        <FinalCelebration data={birthdayData} wishMade={wishMade} onWish={() => setWishMade(true)} />
      </main>

      {modalPhoto && (
        <div className="photo-modal" role="dialog" aria-modal="true" aria-label="Expanded photograph" onClick={() => setModalPhoto(null)}>
          <button className="modal-close" aria-label="Close photograph" onClick={() => setModalPhoto(null)}><X /></button>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <img src={modalPhoto.image} alt={modalPhoto.caption} />
            <p>{modalPhoto.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}
