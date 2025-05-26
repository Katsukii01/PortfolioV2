import React, { useState, useEffect } from "react";

const DROPLET_COUNT = 80; // liczba kropli
const FALL_DURATION = 10000; // czas spadania w ms

// Funkcja generująca losowe parametry kropli
function randomDrop() {
  return {
    left: Math.random() * 100 + "%", // pozycja pozioma
    delay: Math.random() * FALL_DURATION + "ms", // opóźnienie animacji
    duration: (6 + Math.random() * 4) + "s", // czas trwania animacji
    width: 5 + Math.random() * 15 + "px",
    height: 10 + Math.random() * 35 + "px",
    opacity: 0.3 + Math.random() * 0.5,
    zIndex: Math.floor(Math.random() * 100),
  };
}

export default function Rain() {
  // Stan z listą kropli i ich parametrami
  const [drops, setDrops] = useState(() =>
    Array.from({ length: DROPLET_COUNT }, () => randomDrop())
  );

  // Co FALL_DURATION resetujemy parametry kropli (losujemy na nowo)
  useEffect(() => {
    const interval = setInterval(() => {
      setDrops(Array.from({ length: DROPLET_COUNT }, () => randomDrop()));
    }, FALL_DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rain-overlay pointer-events-none absolute inset-0 z-20">
      {drops.map((drop, i) => (
        <div
          key={i}
          className="raindrop"
          style={{
            left: drop.left,
            animationDelay: drop.delay,
            animationDuration: drop.duration,
            width: drop.width,
            height: drop.height,
            opacity: drop.opacity,
          }}
        />
      ))}
    </div>
  );
}
